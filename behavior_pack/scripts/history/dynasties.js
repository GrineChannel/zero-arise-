export class DynastyRegistry{
 constructor(){this.dynasties=new Map();}
 found(id,founderId,stateId,day=0){
  if(!id||this.dynasties.has(id))return false;
  this.dynasties.set(id,{id,founderId,stateId,rulers:[{npcId:founderId,startDay:day,endDay:null}],status:"active"});return true;
 }
 succeed(id,newRulerId,day){
  const d=this.dynasties.get(id);if(!d||d.status!=="active")return false;
  const current=d.rulers[d.rulers.length-1];if(current.npcId===newRulerId)return false;
  current.endDay=day;d.rulers.push({npcId:newRulerId,startDay:day,endDay:null});return true;
 }
 end(id){const d=this.dynasties.get(id);if(!d)return false;d.status="ended";return true;}
 snapshot(){return [...this.dynasties.values()].map(d=>({...d,rulers:d.rulers.map(r=>({...r}))}));}
}
