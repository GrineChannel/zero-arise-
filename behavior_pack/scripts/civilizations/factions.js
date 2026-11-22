export const FACTION_TYPES = Object.freeze(["human", "monster", "mixed"]);
export class FactionRegistry {
  constructor() { this.factions = new Map(); }
  create({ id, name, type = "monster", species = [], settlementIds = [] }) {
    if (typeof id !== "string" || !id || this.factions.has(id)) return false;
    if (!FACTION_TYPES.includes(type)) return false;
    this.factions.set(id, { id, name: String(name || id), type, species: [...species], settlementIds: [...settlementIds], treasury: 0, relations: {} });
    return true;
  }
  get(id) { return this.factions.get(id); }
  list() { return [...this.factions.values()]; }
  snapshot() { return this.list().map(f => ({ ...f, species: [...f.species], settlementIds: [...f.settlementIds], relations: { ...f.relations } })); }
  restore(items) { this.factions.clear(); if (!Array.isArray(items)) return; for (const item of items.slice(0, 256)) { if (!item || !this.create(item)) continue; const f = this.get(item.id); f.treasury = Math.max(0, Number(item.treasury) || 0); f.relations = { ...(item.relations || {}) }; } }
}
