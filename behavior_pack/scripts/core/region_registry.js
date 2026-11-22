// Aggregate state for distant regions; never assumes unloaded chunks exist.
export class RegionRegistry {
  constructor() { this.regions = new Map(); }
  static key(dimension, x, z, regionSize = 256) {
    const size = Math.max(16, regionSize);
    return dimension + ":" + Math.floor(x / size) + ":" + Math.floor(z / size);
  }
  getOrCreate(id) {
    if (!this.regions.has(id)) {
      this.regions.set(id, { id, population: 0, resources: {}, lastSimulatedDay: 0 });
    }
    return this.regions.get(id);
  }
  snapshot() { return Array.from(this.regions.values()).map(r => ({ ...r, resources: { ...r.resources } })); }
  restore(records) {
    this.regions.clear();
    if (!Array.isArray(records)) return;
    for (const record of records.slice(0, 512)) {
      if (!record || typeof record.id !== "string") continue;
      this.regions.set(record.id, {
        id: record.id,
        population: Math.max(0, Number(record.population) || 0),
        resources: record.resources && typeof record.resources === "object" ? { ...record.resources } : {},
        lastSimulatedDay: Math.max(0, Number(record.lastSimulatedDay) || 0)
      });
    }
  }
}
