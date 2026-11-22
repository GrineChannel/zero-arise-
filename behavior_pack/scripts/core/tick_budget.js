// Prevent expensive subsystems from monopolizing a server tick.
export class TickBudget {
  constructor(maxOperations = 32) {
    this.maxOperations = Math.max(1, Math.floor(maxOperations));
    this.remaining = this.maxOperations;
  }
  reset() { this.remaining = this.maxOperations; }
  consume(cost = 1) {
    const units = Math.max(1, Math.floor(cost));
    if (units > this.remaining) return false;
    this.remaining -= units;
    return true;
  }
}
