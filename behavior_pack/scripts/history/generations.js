export class FamilyRegistry{
 constructor(){this.people=new Map();}
 register({id,birthDay=0,parentIds=[],familyId=null}){
  if(!id||this.people.has(id))return false;
  const parents=[...new Set(parentIds.filter(p=>p!==id))].slice(0,2);
  this.people.set(id,{id,birthDay:Math.max(0,Number(birthDay)||0),parentIds:parents,familyId,deathDay:null});
  return true;
 }
 markDeath(id,day){const p=this.people.get(id);if(!p||p.deathDay!==null)return false;p.deathDay=Math.max(p.birthDay,Number(day)||p.birthDay);return true;}
 ancestors(id,maxDepth=8){
  const found=new Set(),queue=[{id,depth:0}];
  while(queue.length){const node=queue.shift();if(node.depth>=maxDepth)continue;for(const p of this.people.get(node.id)?.parentIds||[]){if(found.has(p))continue;found.add(p);queue.push({id:p,depth:node.depth+1});}}
  return [...found];
 }
 snapshot(){return [...this.people.values()].map(p=>({...p,parentIds:[...p.parentIds]}));}
}
