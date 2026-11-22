import { EventQueue } from "./event_queue.js";
import { TickBudget } from "./tick_budget.js";
import { RegionRegistry } from "./region_registry.js";
import { WorldClock } from "./world_clock.js";

export class SimulationCore {
  constructor(config) {
    this.clock = new WorldClock(config.clock.dayMinutes);
    this.events = new EventQueue(256);
    this.budget = new TickBudget(32);
    this.regions = new RegionRegistry();
    this.tickNumber = 0;
    this.handlers = new Map();
  }
  on(type, handler) { this.handlers.set(type, handler); }
  tick() {
    this.tickNumber++;
    this.budget.reset();
    for (const event of this.events.drain(this.tickNumber, 16)) {
      if (!this.budget.consume()) break;
      const handler = this.handlers.get(event.type);
      if (handler) {
        try { handler(event.payload); }
        catch (error) { console.warn("[ZERO: Arise] Event failed: " + String(error)); }
      }
    }
  }
}
