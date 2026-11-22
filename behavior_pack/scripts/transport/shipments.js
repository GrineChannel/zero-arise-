export class ShipmentRegistry{
 constructor(limit=512){this.limit=limit;this.shipments=new Map();}
 dispatch({id,from,to,vehicleId,goods={},travelDays=1}){if(!id||from===to||this.shipments.has(id)||this.shipments.size>=this.limit)return false;const cargo={};for(const [k,v] of Object.entries(goods)){const n=Math.max(0,Math.floor(Number(v)||0));if(n>0)cargo[k]=n;}this.shipments.set(id,{id,from,to,vehicleId,goods:cargo,remainingDays:Math.max(0.01,Number(travelDays)||1),status:"traveling"});return true;}
 advance(days=1){const arrived=[];for(const s of this.shipments.values()){if(s.status!=="traveling")continue;s.remainingDays=Math.max(0,s.remainingDays-Math.max(0,Number(days)||0));if(s.remainingDays===0){s.status="arrived";arrived.push(s.id);}}return arrived;}
 snapshot(){return [...this.shipments.values()].map(s=>({...s,goods:{...s.goods}}));}
}
