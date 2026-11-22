import { FactionRegistry } from "./factions.js";
import { SettlementRegistry } from "./settlements.js";
import { Diplomacy } from "./diplomacy.js";
import { simulateSettlementDay } from "./economy.js";
export class CivilizationSimulation {
  constructor() { this.factions = new FactionRegistry(); this.settlements = new SettlementRegistry(); this.diplomacy = new Diplomacy(); this.lastDay = 0; }
  advanceToDay(day, maxDays = 7) {
    const target = Math.max(0, Math.floor(Number(day) || 0));
    const count = Math.min(Math.max(0, target - this.lastDay), maxDays);
    for (let i = 0; i < count; i++) {
      for (const settlement of this.settlements.list()) simulateSettlementDay(settlement);
      this.lastDay++;
    }
    return count;
  }
  snapshot() { return { lastDay: this.lastDay, factions: this.factions.snapshot(), settlements: this.settlements.snapshot(), diplomacy: this.diplomacy.snapshot() }; }
  restore(state) {
    if (!state || typeof state !== "object") return;
    this.lastDay = Math.max(0, Math.floor(Number(state.lastDay) || 0));
    this.factions.restore(state.factions);
    this.settlements.restore(state.settlements);
    this.diplomacy.restore(state.diplomacy);
  }
}
