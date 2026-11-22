export class TransportNetwork{
 constructor(){this.nodes=new Map();this.edges=new Map();}
 addNode(id,{x=0,z=0,kind="settlement"}={}){if(!id||this.nodes.has(id))return false;this.nodes.set(id,{id,x,z,kind});return true;}
 connect(a,b,{mode="land",distance=1,condition=100}={}){if(a===b||!this.nodes.has(a)||!this.nodes.has(b)||!Number.isFinite(distance)||distance<=0)return false;const key=[a,b].sort().join("|");this.edges.set(key,{a,b,mode,distance,condition:Math.max(0,Math.min(100,condition))});return true;}
 neighbors(id,mode=null){return [...this.edges.values()].filter(e=>(e.a===id||e.b===id)&&(!mode||e.mode===mode)&&e.condition>0).map(e=>({id:e.a===id?e.b:e.a,distance:e.distance,condition:e.condition}));}
 snapshot(){return {nodes:[...this.nodes.values()].map(n=>({...n})),edges:[...this.edges.values()].map(e=>({...e}))};}
}
