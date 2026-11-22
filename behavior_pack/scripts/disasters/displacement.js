export class DisplacementRegistry{
 constructor(){this.groups=new Map();}
 evacuate(groupId,originId,destinationId,count){
  if(!groupId||this.groups.has(groupId))return false;
  const n=Math.max(0,Math.floor(Number(count)||0));if(!n)return false;
  this.groups.set(groupId,{id:groupId,originId,destinationId,count:n,status:"traveling"});
  return true;
 }
 arrive(groupId){const g=this.groups.get(groupId);if(!g)return false;g.status="sheltered";return true;}
 resettle(groupId,newHomeId){const g=this.groups.get(groupId);if(!g)return false;g.destinationId=newHomeId;g.status="resettled";return true;}
 snapshot(){return [...this.groups.values()].map(g=>({...g}));}
}
