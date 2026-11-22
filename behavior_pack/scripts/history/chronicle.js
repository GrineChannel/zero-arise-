import {createHistoricalEvent} from "./events.js";
export class WorldChronicle{
 constructor(limit=2048){this.limit=Math.max(16,Math.min(8192,Math.floor(limit)));this.events=[];this.ids=new Set();}
 record(event){
  const valid=createHistoricalEvent(event||{});
  if(!valid||this.ids.has(valid.id))return false;
  this.events.push(valid);this.ids.add(valid.id);
  if(this.events.length>this.limit){
   const idx=this.events.findIndex(e=>e.importance<60);
   const removed=this.events.splice(idx<0?0:idx,1)[0];this.ids.delete(removed.id);
  }
  return true;
 }
 query({regionId=null,type=null,minImportance=0,limit=50}={}){
  return this.events.filter(e=>(regionId===null||e.regionId===regionId)&&(type===null||e.type===type)&&e.importance>=minImportance).slice(-Math.max(1,Math.min(200,limit)));
 }
 snapshot(){return this.events.map(e=>({...e,actors:[...e.actors],details:{...e.details}}));}
}
