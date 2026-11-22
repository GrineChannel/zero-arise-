export class MarketRegistry{
 constructor(){this.markets=new Map();}
 establish(id,settlementId){if(!id||this.markets.has(id))return false;this.markets.set(id,{id,settlementId,goods:{}});return true;}
 quote(id,good,{supply=0,demand=0,basePrice=100}={}){const m=this.markets.get(id);if(!m||!good)return null;const s=Math.max(0,Number(supply)||0),d=Math.max(0,Number(demand)||0),base=Math.max(1,Math.floor(Number(basePrice)||1));const ratio=(d+10)/(s+10);const price=Math.max(1,Math.round(base*Math.max(0.25,Math.min(4,ratio))));m.goods[good]={supply:s,demand:d,price};return price;}
 snapshot(){return [...this.markets.values()].map(m=>({...m,goods:Object.fromEntries(Object.entries(m.goods).map(([k,v])=>[k,{...v}]))}));}
}
