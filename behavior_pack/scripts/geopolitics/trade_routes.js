export class TradeRouteRegistry{
 constructor(){this.routes=new Map();}
 establish({id,from,to,goods=[],capacity=10,risk=0}){if(!id||from===to||this.routes.has(id))return false;this.routes.set(id,{id,from,to,goods:[...new Set(goods)].slice(0,16),capacity:Math.max(0,Number(capacity)||0),risk:Math.max(0,Math.min(100,Number(risk)||0)),active:true});return true;}
 shipment(id,available,demand){const r=this.routes.get(id);if(!r||!r.active)return {};const result={};let remaining=r.capacity;for(const good of r.goods){const count=Math.max(0,Math.min(remaining,Number(available[good])||0,Number(demand[good])||0));if(count>0){result[good]=count;remaining-=count;}}return result;}
 snapshot(){return [...this.routes.values()].map(r=>({...r,goods:[...r.goods]}));}
}
