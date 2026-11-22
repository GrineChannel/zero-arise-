export class HistoricalArchive{
 constructor(){this.collections=new Map();}
 establish(id,settlementId,capacity=128){
  if(!id||this.collections.has(id))return false;
  this.collections.set(id,{id,settlementId,capacity:Math.max(1,Math.min(2048,Math.floor(capacity))),eventIds:[],knowledgeIds:[],integrity:100});return true;
 }
 preserve(id,kind,itemId){
  const a=this.collections.get(id);if(!a||a.integrity<=0)return false;
  const target=kind==="event"?a.eventIds:kind==="knowledge"?a.knowledgeIds:null;
  if(!target||target.includes(itemId)||a.eventIds.length+a.knowledgeIds.length>=a.capacity)return false;
  target.push(itemId);return true;
 }
 damage(id,amount){const a=this.collections.get(id);if(!a)return false;a.integrity=Math.max(0,a.integrity-Math.max(0,Number(amount)||0));return true;}
 snapshot(){return [...this.collections.values()].map(a=>({...a,eventIds:[...a.eventIds],knowledgeIds:[...a.knowledgeIds]}));}
}
