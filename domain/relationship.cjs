'use strict';
// Experimental domain foundation; intentionally not connected to the rejected v1 UI.
const copy=value=>structuredClone(value);
function freeze(value){for(const child of Object.values(value))if(child&&typeof child==='object')freeze(child);return Object.freeze(value);}
function canonical(value){return JSON.stringify(value,(_,v)=>v&&!Array.isArray(v)&&typeof v==='object'?Object.fromEntries(Object.keys(v).sort().map(k=>[k,v[k]])):v);}
function checkActor(state,actor,permission){
  if(!actor||actor.organizationId!==state.organization.id||!actor.permissions?.includes(permission))throw Error('Action not permitted.');
}
function record(state,collection,id){const r=state[collection].find(x=>x.id===id&&x.organizationId===state.organization.id);if(!r)throw Error('Record unavailable.');return r;}
function version(record,expected){if(record.version!==expected)throw Error('Record changed. Reload before saving.');}
function iso(now){const value=new Date(now);if(!Number.isFinite(value.valueOf()))throw Error('Invalid event time.');return value.toISOString();}
function customerContext(state,id){const customer=record(state,'customers',id);return {customer,contacts:state.contacts.filter(x=>x.customerId===id&&x.organizationId===state.organization.id),locations:state.locations.filter(x=>x.customerId===id&&x.organizationId===state.organization.id)};}
function qualifyEnquiry(state,{enquiryId,expectedVersion,eventId,actor,now,data}){
  checkActor(state,actor,'enquiry.qualify');const enquiry=record(state,'enquiries',enquiryId);
  if(!eventId)throw Error('An event identifier is required.');
  const request=canonical({enquiryId,expectedVersion,actorId:actor.id,data}),repeated=state.events.find(e=>e.id===eventId);
  if(repeated){if(repeated.type!=='enquiry.qualified'||repeated.recordId!==enquiryId||repeated.actorId!==actor.id||repeated.request!==request)throw Error('Event identifier already used.');return copy(repeated.result);}
  version(enquiry,expectedVersion);if(enquiry.status!=='new')throw Error('Enquiry is not awaiting qualification.');
  const location=record(state,'locations',data.locationId),contact=record(state,'contacts',data.contactId);
  if(location.customerId!==enquiry.customerId||contact.customerId!==enquiry.customerId)throw Error('Contact or location belongs to another customer.');
  if(!data.service?.trim()||!data.requirement?.trim()||!data.ownerId)throw Error('Service, requirement and responsible owner are required.');
  record(state,'owners',data.ownerId);
  if(!location.address?.trim()||!contact.email&&!contact.phone)throw Error('Confirm a service address and at least one contact method.');
  if(!['eligible','review_required','outside_area'].includes(data.eligibility))throw Error('Choose service eligibility.');
  const assetIds=[...new Set(data.assetIds||[])];
  const assets=assetIds.map(id=>record(state,'assets',id));
  if(assets.some(a=>a.locationId!==location.id))throw Error('Equipment belongs to another location.');
  const at=iso(now),result={enquiryId,status:'qualified',version:enquiry.version+1};
  const snapshot=freeze(copy({customerId:enquiry.customerId,contact,location,assets,service:data.service.trim(),requirement:data.requirement.trim(),capturedAt:at}));
  Object.assign(enquiry,{status:'qualified',version:result.version,ownerId:data.ownerId,eligibility:data.eligibility,qualification:snapshot});
  state.events.push({id:eventId,type:'enquiry.qualified',recordId:enquiry.id,actorId:actor.id,at,request,result:copy(result)});
  return result;
}
function updateLocation(state,{locationId,expectedVersion,actor,address,now}){
  checkActor(state,actor,'customer.edit');const location=record(state,'locations',locationId);version(location,expectedVersion);
  if(!address?.trim())throw Error('Address is required.');const at=iso(now),previous=location.address;location.address=address.trim();location.version++;
  state.events.push({id:location.id+':'+location.version,type:'location.updated',recordId:location.id,actorId:actor.id,at,previousAddress:previous,currentAddress:location.address});return copy(location);
}
function actionsForCustomer(state,customerId,actor,now){
  checkActor(state,actor,'relationship.view');customerContext(state,customerId);const nowIso=iso(now),actions=[];
  const add=(record,kind,label,permission,rank,reason,blockers=[])=>{
    const allowed=actor.permissions.includes(permission);
    const reasons=[...blockers,...(record.ownerId?[]:['Assign a responsible owner.']),...(allowed?[]:['Your role cannot perform this action.'])];
    actions.push({id:kind+':'+record.id,recordId:record.id,kind,label,ownerId:record.ownerId||null,eligible:reasons.length===0,permission,reason,blockers:reasons,rank,dueAt:record.dueAt||null});
  };
  const scoped=name=>state[name].filter(r=>r.organizationId===state.organization.id&&r.customerId===customerId);
  for(const e of scoped('enquiries')){
    if(e.status==='new')add(e,'qualify','Qualify request','enquiry.qualify',60,'Incoming request needs a service decision.');
    else if(e.status==='qualified'&&!scoped('quotes').some(q=>q.enquiryId===e.id&&q.status!=='void'))add(e,'prepare_quote','Prepare quote','quote.edit',50,'Qualified requirements are ready for pricing.',e.eligibility==='eligible'?[]:['Resolve service eligibility or technical review.']);
  }
  for(const q of scoped('quotes')){
    if(q.status==='accepted'&&!scoped('jobs').some(j=>j.quoteId===q.id&&j.status!=='cancelled')){
      const blockers=[];if(q.technicalReview!=='clear')blockers.push('Technical review is unresolved.');if(!q.acceptedVersionId)blockers.push('Accepted quote version is missing.');
      add(q,blockers.length?'technical_review':'schedule',blockers.length?'Resolve scheduling prerequisites':'Schedule work','schedule.edit',75,'Accepted scope needs a delivery plan.',blockers);
    }else if(q.status==='sent'&&q.followupAt&&q.followupAt<=nowIso)add(q,'quote_followup','Follow up on quote','communication.draft',55,'The agreed follow-up date has arrived.');
  }
  for(const visit of scoped('visits'))if(visit.status==='scheduled')add(visit,'prepare_visit','Prepare visit','job.prepare',80,'An upcoming customer commitment needs preparation.');
  for(const job of scoped('jobs'))if(job.status==='completed'&&!scoped('invoices').some(i=>i.jobIds.includes(job.id)&&i.status!=='void'))add(job,'completion_review','Review completion for invoicing','invoice.prepare',70,'Completed work needs a billability check.',job.closeoutApproved?[]:['Completion review is pending.']);
  for(const invoice of scoped('invoices')){
    if(invoice.status!=='issued')continue;
    const allocated=state.allocations.filter(a=>a.organizationId===state.organization.id&&a.invoiceId===invoice.id&&state.payments.some(p=>p.id===a.paymentId&&p.organizationId===state.organization.id&&p.customerId===customerId&&p.status==='confirmed')).reduce((sum,a)=>sum+a.amountMinor,0);
    if(invoice.totalMinor>allocated)add(invoice,'payment_resolution',invoice.dueAt<nowIso?'Resolve overdue invoice':'Track outstanding payment','payment.review',invoice.dueAt<nowIso?90:40,'Invoice balance remains uncollected.');
  }
  for(const followup of scoped('followups'))if(followup.status==='open'&&followup.dueAt<=nowIso)add(followup,'service_followup','Review service follow-up','communication.draft',45,'A planned relationship follow-up is due.');
  // Priority is transparent: explicit impact rank, then deadline, then stable identifier.
  actions.sort((a,b)=>b.rank-a.rank||(a.dueAt||'9999').localeCompare(b.dueAt||'9999')||a.id.localeCompare(b.id));
  return {customerId,asOf:nowIso,primary:actions.find(a=>a.eligible)||null,actions};
}
function fixture(){const org='org-demo',owned=(id,extra)=>({id,organizationId:org,version:1,...extra});return {
  organization:{id:org,name:'Synthetic service business'},
  owners:[owned('office',{name:'Service coordinator'}),owned('dispatch',{name:'Dispatcher'}),owned('billing',{name:'Billing coordinator'})],
  customers:[owned('sarah',{name:'Sarah Mitchell',kind:'individual'}),owned('other',{name:'Other synthetic customer',kind:'organization'})],
  contacts:[owned('contact-sarah',{customerId:'sarah',name:'Sarah Mitchell',email:'sarah@example.com',phone:null})],
  locations:[owned('home',{customerId:'sarah',address:'123 Synthetic Lane',city:'Mississauga'})],
  assets:[owned('fireplace',{locationId:'home',kind:'gas_fireplace',brand:null,model:null})],
  enquiries:[owned('enquiry-new',{customerId:'sarah',status:'new',ownerId:'office',source:'google_search',createdAt:'2026-10-18T12:00:00.000Z'})],
  quotes:[owned('quote-accepted',{customerId:'sarah',enquiryId:'older-enquiry',status:'accepted',acceptedVersionId:'quote-v1',technicalReview:'clear',ownerId:'dispatch',dueAt:'2026-10-20T12:00:00.000Z'})],
  quoteVersions:[owned('quote-v1',{quoteId:'quote-accepted',scope:'Annual maintenance',amountMinor:38000,currency:'CAD',terms:'Synthetic example',serviceAddressSnapshot:{address:'123 Synthetic Lane'}})],
  jobs:[owned('job-old',{customerId:'sarah',quoteId:'quote-old',status:'completed',closeoutApproved:true,serviceAddressSnapshot:{address:'42 Previous Synthetic Road'},equipmentSnapshot:{kind:'gas_fireplace',model:'Historical model'}})],
  visits:[],invoices:[owned('invoice-overdue',{customerId:'sarah',jobIds:['job-old'],status:'issued',totalMinor:38000,currency:'CAD',dueAt:'2026-10-01T12:00:00.000Z',ownerId:'billing'})],
  payments:[],allocations:[],followups:[owned('annual-reminder',{customerId:'sarah',status:'open',dueAt:'2026-10-15T12:00:00.000Z',ownerId:'office'})],events:[]
};}
module.exports={fixture,qualifyEnquiry,updateLocation,actionsForCustomer};
