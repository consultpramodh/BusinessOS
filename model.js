'use strict';
const BusinessModel = (() => {
  const stages = ['New enquiry','Qualified','Quote awaiting response','Quote accepted','Scheduled','In progress','Service completed','Invoiced','Paid'];
  const actions = ['Qualify lead','Prepare quote','Record acceptance','Schedule service','Start service','Complete service','Prepare invoice','Record demo payment','Review contribution'];
  function seed() {
    return {settings:{business:'Hearth & Home Service',rate:145,technicians:['Alex Chen','Morgan Lee','Sam Patel']}, customers:[
      {id:'c1',name:'Sarah Mitchell',email:'sarah.mitchell@example.com',phone:'416-555-0142'},
      {id:'c2',name:'James Wilson',email:'james.wilson@example.com',phone:'416-555-0183'},
      {id:'c3',name:'Priya Shah',email:'priya.shah@example.com',phone:'416-555-0168'}],
      locations:[{id:'l1',customerId:'c1',address:'123 Example Lane',city:'Mississauga',postal:'L4Y 1A1'},{id:'l2',customerId:'c2',address:'24 Sample Road',city:'Oakville',postal:'L6H 1A1'},{id:'l3',customerId:'c3',address:'8 Demo Court',city:'Toronto',postal:'M4B 1B3'}],
      equipment:[{id:'e1',locationId:'l1',fuel:'Natural gas',brand:'Not yet known',model:'Not yet known',room:'Living room'},{id:'e2',locationId:'l2',fuel:'Natural gas',brand:'Demo equipment',model:'Not recorded',room:'Family room'},{id:'e3',locationId:'l3',fuel:'Electric',brand:'Demo equipment',model:'Not recorded',room:'Living room'}],
      jobs:[{id:'j1',customerId:'c1',locationId:'l1',equipmentId:'e1',service:'Fireplace service & maintenance',issue:'Pilot light will not stay on.',count:1,stage:0,costs:null,events:[{text:'Website enquiry received',at:'Synthetic starting point'}]},
      {id:'j2',customerId:'c2',locationId:'l2',equipmentId:'e2',service:'Annual fireplace maintenance',issue:'Annual maintenance visit.',count:1,stage:4,quote:{amount:32500,status:'Accepted'},appointment:{date:'2026-10-20',window:'AM',technician:'Alex Chen'},costs:null,events:[{text:'Service scheduled',at:'Synthetic starting point'}]},
      {id:'j3',customerId:'c3',locationId:'l3',equipmentId:'e3',service:'Fireplace inspection',issue:'Inspection completed.',count:1,stage:7,quote:{amount:26000,status:'Accepted'},invoice:{amount:26000,id:'INV-003'},costs:{labor:10000,materials:2500,other:1500},events:[{text:'Invoice prepared',at:'Synthetic starting point'}]},
      {id:'j4',customerId:'c1',locationId:'l1',equipmentId:'e1',service:'Previous annual service',issue:'Historical synthetic service record.',count:1,stage:8,quote:{amount:38000,status:'Accepted'},invoice:{amount:38000,id:'INV-004'},payment:{amount:38000},costs:{labor:15000,materials:2000,other:0},events:[{text:'Previous service paid',at:'Historical synthetic example'}]}]};
  }
  function today(){return new Date().toLocaleDateString('en-CA',{timeZone:'America/Toronto'});}
  function validDate(date){return /^\d{4}-\d{2}-\d{2}$/.test(date)&&Number.isFinite(Date.parse(date))&&new Date(date).toISOString().slice(0,10)===date&&date>=today();}
  function transition(state,id,data={}) {
    const j=state.jobs.find(x=>x.id===id); if(!j) throw Error('Work record not found.');
    const customer=state.customers.find(c=>c.id===j.customerId), location=state.locations.find(l=>l.id===j.locationId);
    let event;
    if(j.stage===0){
      for(const key of ['name','email','phone','address','city','postal','service','issue']) if(!String(data[key]||'').trim()) throw Error('Complete the required qualification fields.');
      if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) throw Error('Enter a valid email address.');
      if(!/^\+?[\d ().-]+$/.test(data.phone)||!/^\d{10,15}$/.test(data.phone.replace(/\D/g,''))) throw Error('Enter a phone number with 10–15 digits.');
      if(!/^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z] ?\d[ABCEGHJ-NPRSTV-Z]\d$/i.test(data.postal)) throw Error('Enter a valid Canadian postal code.');
      if(!Number.isInteger(Number(data.count))||Number(data.count)<1||Number(data.count)>10) throw Error('Use 1–10 fireplaces.');
      Object.assign(customer,{name:data.name.trim(),email:data.email.trim(),phone:data.phone.trim()});
      Object.assign(location,{address:data.address.trim(),city:data.city.trim(),postal:data.postal.toUpperCase()});
      Object.assign(j,{service:data.service,issue:data.issue,count:Number(data.count)});
      const equipment=state.equipment.find(e=>e.id===j.equipmentId);
      for(const key of ['fuel','brand','model','room']) if(data[key]?.trim()) equipment[key]=data[key].trim();
      event='Enquiry qualified';
    }else if(j.stage===1){
      const amount=money(data.amount); if(amount<=0) throw Error('Quote must be greater than zero.');
      j.quote={amount,status:'Awaiting response'}; event='Demo quote prepared';
    }else if(j.stage===2){j.quote.status='Accepted';event='Customer acceptance recorded · demo';
    }else if(j.stage===3){
      if(!validDate(data.date)) throw Error('Choose a valid date today or later.');
      if(!['AM','PM'].includes(data.window)||!state.settings.technicians.includes(data.technician)) throw Error('Choose a window and technician.');
      if(state.jobs.some(x=>x.id!==id&&[4,5].includes(x.stage)&&x.appointment?.date===data.date&&x.appointment?.window===data.window&&x.appointment?.technician===data.technician)) throw Error('This technician already has work in that window. Choose another slot.');
      j.appointment={date:data.date,window:data.window,technician:data.technician};event='Service scheduled';
    }else if(j.stage===4){event='Service started';
    }else if(j.stage===5){
      if(!data.notes?.trim()) throw Error('Add completion notes.');
      const costs={labor:money(data.labor),materials:money(data.materials),other:money(data.other)};
      j.costs=costs;j.notes=data.notes.trim();event='Service completed';
    }else if(j.stage===6){j.invoice={amount:j.quote.amount,id:'INV-'+j.id.toUpperCase()};event='Demo invoice prepared';
    }else if(j.stage===7){j.payment={amount:j.invoice.amount};event='Demo payment recorded';
    }else throw Error('This job is already paid.');
    j.stage++;j.events.push({text:event,at:new Date().toLocaleString('en-CA',{timeZone:'America/Toronto'})});return j;
  }
  function money(value){if(value===''||value==null||!/^\d+(\.\d{1,2})?$/.test(String(value)))throw Error('Enter a non-negative amount with up to two decimals.');const cents=Math.round(Number(value)*100);if(!Number.isSafeInteger(cents)||cents>100000000)throw Error('Amount is too large.');return cents;}
  function totals(state){return state.jobs.reduce((a,j)=>{a.quoted+=j.quote?.amount||0;a.invoiced+=j.invoice?.amount||0;a.collected+=j.payment?.amount||0;a.outstanding+=(j.invoice?.amount||0)-(j.payment?.amount||0);return a;},{quoted:0,invoiced:0,collected:0,outstanding:0});}
  function contribution(j){return j.costs&&j.invoice?j.invoice.amount-Object.values(j.costs).reduce((a,b)=>a+b,0):null;}
  function addEnquiry(state,data){
    const name=data.name?.trim(),email=data.email?.trim(),issue=data.issue?.trim(),city=data.city?.trim();
    if(!name||!issue||!city||!email||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))throw Error('Enter a name, valid email, city and service request.');
    if(state.customers.some(c=>c.email.toLowerCase()===email.toLowerCase()))throw Error('A customer with this email already exists. Open their relationship to review existing work.');
    const suffix=String(state.customers.length+1)+'-'+String(state.jobs.length+1),customerId='c'+suffix,locationId='l'+suffix,equipmentId='e'+suffix;
    state.customers.push({id:customerId,name,email,phone:''});state.locations.push({id:locationId,customerId,address:'',city,postal:''});
    state.equipment.push({id:equipmentId,locationId,fuel:'Not yet known',brand:'Not yet known',model:'Not yet known',room:'Not yet known'});
    const j={id:'j'+suffix,customerId,locationId,equipmentId,service:'Fireplace service & maintenance',issue,count:1,stage:0,costs:null,events:[{text:'Enquiry created',at:'This session'}]};state.jobs.push(j);return j;
  }
  return {seed,transition,totals,contribution,money,stages,actions,today,validDate,addEnquiry};
})();
if(typeof module!=='undefined') module.exports=BusinessModel;
