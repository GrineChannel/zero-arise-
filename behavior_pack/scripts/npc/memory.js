export class NpcMemory {
  constructor(capacity = 32) { this.capacity = Math.max(1,Math.min(128,Math.floor(capacity))); this.events = []; }
  remember({ type, actorId = null, day = 0, importance = 50 }) {
    const event = { type:String(type), actorId, day:Math.max(0,Number(day)||0), importance:Math.max(0,Math.min(100,Number(importance)||0)) };
    this.events.push(event);
    if (this.events.length > this.capacity) {
      this.events.sort((a,b)=>b.importance-a.importance || b.day-a.day);
      this.events.length = this.capacity;
    }
  }
  snapshot() { return this.events.map(e=>({...e})); }
  restore(events) { this.events = []; if (!Array.isArray(events)) return; for (const e of events.slice(-this.capacity)) if (e && typeof e.type==="string") this.remember(e); }
}
