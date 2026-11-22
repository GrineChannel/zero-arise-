export class HistoricalInterpretations{
 constructor(){this.views=new Map();}
 setView(cultureId,eventId,{narrative="",sentiment=0,certainty=0.5}={}){
  const key=String(cultureId)+"|"+String(eventId);
  this.views.set(key,{cultureId,eventId,narrative:String(narrative).slice(0,240),sentiment:Math.max(-1,Math.min(1,Number(sentiment)||0)),certainty:Math.max(0,Math.min(1,Number(certainty)||0))});return true;
 }
 getView(cultureId,eventId){return this.views.get(String(cultureId)+"|"+String(eventId))||null;}
 snapshot(){return [...this.views.values()].map(v=>({...v}));}
}
