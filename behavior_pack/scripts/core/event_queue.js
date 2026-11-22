// Deterministic, bounded event queue. No Minecraft API dependency.
export class EventQueue {
  constructor(maxPending = 256) {
    this.maxPending = maxPending;
    this.events = [];
    this.nextId = 1;
  }
  enqueue(type, payload = {}, dueTick = 0) {
    if (this.events.length >= this.maxPending) return null;
    const event = { id: this.nextId++, type, payload, dueTick: Math.max(0, Math.floor(dueTick)) };
    this.events.push(event);
    return event.id;
  }
  drain(currentTick, limit = 16) {
    const ready = [];
    const pending = [];
    for (const event of this.events) {
      if (event.dueTick <= currentTick && ready.length < limit) ready.push(event);
      else pending.push(event);
    }
    this.events = pending;
    return ready;
  }
  get size() { return this.events.length; }
}
