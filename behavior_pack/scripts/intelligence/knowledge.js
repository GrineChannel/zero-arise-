export class KnowledgeBase {
  constructor(limit = 256) { this.limit=Math.max(1,Math.min(1024,Math.floor(limit))); this.known=new Map(); }
  learn(id, confidence = 1, source = "experience") {
    const key=String(id);
    if (!key || (!this.known.has(key) && this.known.size>=this.limit)) return false;
    const old=this.known.get(key);
    this.known.set(key,{confidence:Math.max(old?.confidence||0,Math.min(1,Math.max(0,Number(confidence)||0))),source:String(source)});
    return true;
  }
  knows(id, threshold=0.5) { return (this.known.get(String(id))?.confidence||0)>=threshold; }
  snapshot() { return [...this.known.entries()]; }
  restore(entries) { this.known.clear(); if (!Array.isArray(entries)) return; for (const e of entries.slice(0,this.limit)) if (Array.isArray(e)&&e.length===2) this.learn(e[0],e[1]?.confidence,e[1]?.source); }
}
