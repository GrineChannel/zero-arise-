export class ExperienceLedger {
  constructor(maxRecords = 48) { this.maxRecords=Math.max(1,Math.min(128,Math.floor(maxRecords))); this.records=[]; }
  record(action, outcome, context = {}, day = 0) {
    const score=Math.max(-1,Math.min(1,Number(outcome)||0));
    const entry={action:String(action),score,contextKey:String(context.key||"general"),day:Math.max(0,Number(day)||0)};
    this.records.push(entry);
    if (this.records.length>this.maxRecords) this.records.shift();
  }
  estimate(action, contextKey="general") {
    const matched=this.records.filter(r=>r.action===action && r.contextKey===contextKey);
    return matched.length ? matched.reduce((sum,r)=>sum+r.score,0)/matched.length : 0;
  }
  snapshot() { return this.records.map(r=>({...r})); }
}
