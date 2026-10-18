'use strict';
// Parser/component-contract spike only. No inference, renderer, tools or network.
const {defineComponent,createLibrary,createParser}=require('@openuidev/lang-core');
const {z}=require('zod');
const Action=defineComponent({name:'BusinessAction',description:'A domain-approved action with transparent reason, owner and eligibility.',props:z.object({id:z.string(),label:z.string(),reason:z.string(),owner:z.string(),eligible:z.boolean(),blockers:z.array(z.string())}),component:null});
const Panel=defineComponent({name:'RelationshipPanel',description:'Read-only contextual action proposal for one known relationship.',props:z.object({customerId:z.string(),actions:z.array(Action.ref)}),component:null});
const library=createLibrary({id:'businessos-context-v1',root:'RelationshipPanel',components:[Panel,Action]});
function programFor(context){return `root = RelationshipPanel(${JSON.stringify(context.customerId)}, [${context.actions.map((_,i)=>'action'+i).join(', ')}])\n`+context.actions.map((a,i)=>`action${i} = BusinessAction(${[a.id,a.label,a.reason,a.ownerId||'Unassigned',a.eligible,a.blockers].map(JSON.stringify).join(', ')})`).join('\n');}
function parseApproved(program,context){
  const result=createParser(library.toJSONSchema(),'RelationshipPanel').parse(program);
  if(!result.root||result.meta.incomplete||result.meta.errors.length||result.meta.unresolved.length||result.meta.orphaned.length||result.queryStatements.length||result.mutationStatements.length||Object.keys(result.stateDeclarations).length)throw Error('Invalid or unsupported OpenUI program.');
  const root=result.root;
  if(root.typeName!=='RelationshipPanel'||root.props.customerId!==context.customerId)throw Error('Relationship context mismatch.');
  const expected=new Map(context.actions.map(a=>[a.id,a])),seen=new Set();
  for(const node of root.props.actions){
    const a=expected.get(node.props.id);if(node.typeName!=='BusinessAction'||!a||seen.has(a.id))throw Error('Unknown or duplicate action.');
    const approved={id:a.id,label:a.label,reason:a.reason,owner:a.ownerId||'Unassigned',eligible:a.eligible,blockers:a.blockers};
    if(JSON.stringify(node.props)!==JSON.stringify(approved))throw Error('Action data must match the domain decision.');seen.add(a.id);
  }
  if(seen.size!==expected.size||root.props.actions.some((n,i)=>n.props.id!==context.actions[i].id))throw Error('Missing or reordered domain actions.');
  return result;
}
module.exports={library,programFor,parseApproved};
