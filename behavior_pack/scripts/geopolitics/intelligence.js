export class IntelligenceLedger{
 constructor(limit=256){this.limit=limit;this.reports=[];}
 add({observer,target,topic,estimate,confidence=0.5,day=0}){if(!observer||!target||!topic)return false;this.reports.push({observer,target,topic,estimate,confidence:Math.max(0,Math.min(1,Number(confidence)||0)),day});if(this.reports.length>this.limit)this.reports.shift();return true;}
 latest(observer,target,topic){for(let i=this.reports.length-1;i>=0;i--){const r=this.reports[i];if(r.observer===observer&&r.target===target&&r.topic===topic)return {...r};}return null;}
 snapshot(){return this.reports.map(r=>({...r}));}
}
