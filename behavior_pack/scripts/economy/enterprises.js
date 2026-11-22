export class EnterpriseRegistry{
 constructor(limit=512){this.limit=limit;this.enterprises=new Map();}
 found({id,ownerId,settlementId,industry,capital=0,workers=0}){if(!id||!industry||this.enterprises.has(id)||this.enterprises.size>=this.limit)return false;this.enterprises.set(id,{id,ownerId,settlementId,industry,capital:Math.max(0,Math.floor(capital)),workers:Math.max(0,Math.floor(workers)),inventory:{},active:true});return true;}
 hire(id,count){const e=this.enterprises.get(id);if(!e||!e.active)return false;e.workers=Math.max(0,e.workers+Math.floor(Number(count)||0));return true;}
 snapshot(){return [...this.enterprises.values()].map(e=>({...e,inventory:{...e.inventory}}));}
}
