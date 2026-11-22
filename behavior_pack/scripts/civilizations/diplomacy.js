export const RELATION_STATES = Object.freeze(["war", "hostile", "neutral", "trade", "allied"]);
export function relationKey(a, b) { return [String(a), String(b)].sort().join("|"); }
export class Diplomacy {
  constructor() { this.relations = new Map(); }
  set(a, b, state) {
    if (a === b || !RELATION_STATES.includes(state)) return false;
    this.relations.set(relationKey(a, b), state);
    return true;
  }
  get(a, b) { return a === b ? "allied" : (this.relations.get(relationKey(a, b)) || "neutral"); }
  snapshot() { return [...this.relations.entries()]; }
  restore(entries) {
    this.relations.clear();
    if (!Array.isArray(entries)) return;
    for (const entry of entries.slice(0, 1024)) if (Array.isArray(entry) && entry.length === 2 && RELATION_STATES.includes(entry[1])) this.relations.set(String(entry[0]), entry[1]);
  }
}
