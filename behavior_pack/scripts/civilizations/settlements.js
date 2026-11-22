export class SettlementRegistry {
  constructor() { this.settlements = new Map(); }
  create({ id, name, factionId, dimension = "minecraft:overworld", x = 0, z = 0, population = 0 }) {
    if (typeof id !== "string" || !id || this.settlements.has(id)) return false;
    this.settlements.set(id, { id, name: String(name || id), factionId: String(factionId), dimension, x: Number(x) || 0, z: Number(z) || 0, population: Math.max(0, Math.floor(Number(population) || 0)), food: 0, materials: 0, defense: 0 });
    return true;
  }
  get(id) { return this.settlements.get(id); }
  list() { return [...this.settlements.values()]; }
  snapshot() { return this.list().map(s => ({ ...s })); }
  restore(items) { this.settlements.clear(); if (!Array.isArray(items)) return; for (const item of items.slice(0, 512)) { if (!item || !this.create(item)) continue; const s = this.get(item.id); for (const key of ["food", "materials", "defense"]) s[key] = Math.max(0, Number(item[key]) || 0); } }
}
