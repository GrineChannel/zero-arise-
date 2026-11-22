export class RuinRegistry{
 constructor(limit=256){this.limit=Math.max(1,Math.min(1024,Math.floor(limit)));this.ruins=new Map();}
 register({id,settlementId,x=0,z=0,day=0,formerCulture=null,discoveries=[]}){
  if(!id||this.ruins.has(id)||this.ruins.size>=this.limit)return false;
  this.ruins.set(id,{id,settlementId,x,z,day,formerCulture,discoveries:[...discoveries].slice(0,32),explored:false});
  return true;
 }
 explore(id){const ruin=this.ruins.get(id);if(!ruin)return null;ruin.explored=true;return {...ruin,discoveries:[...ruin.discoveries]};}
 snapshot(){return [...this.ruins.values()].map(r=>({...r,discoveries:[...r.discoveries]}));}
}
