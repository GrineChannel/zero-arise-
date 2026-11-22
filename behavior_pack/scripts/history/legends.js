export class LegendRegistry{
 constructor(limit=256){this.limit=Math.max(1,Math.min(1024,Math.floor(limit)));this.legends=new Map();}
 create({id,sourceEventId,title,cultureId=null,exaggeration=0}){
  if(!id||this.legends.has(id)||this.legends.size>=this.limit)return false;
  this.legends.set(id,{id,sourceEventId,title:String(title||id),cultureId,exaggeration:Math.max(0,Math.min(100,Number(exaggeration)||0)),retellings:0});return true;
 }
 retell(id,variation=1){const l=this.legends.get(id);if(!l)return false;l.retellings++;l.exaggeration=Math.max(0,Math.min(100,l.exaggeration+Math.max(-5,Math.min(5,Number(variation)||0))));return true;}
 snapshot(){return [...this.legends.values()].map(l=>({...l}));}
}
