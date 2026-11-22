export class RelationshipGraph {
  constructor() { this.edges = new Map(); }
  static key(a,b) { return [String(a),String(b)].sort().join("|"); }
  get(a,b) { return this.edges.get(RelationshipGraph.key(a,b)) || { trust:50, affinity:50, familiarity:0 }; }
  adjust(a,b,delta = {}) {
    if (a===b) return null;
    const prior = this.get(a,b), next = {};
    for (const key of ["trust","affinity","familiarity"]) next[key] = Math.max(0,Math.min(100,prior[key]+(Number(delta[key])||0)));
    this.edges.set(RelationshipGraph.key(a,b),next);
    return next;
  }
  snapshot() { return [...this.edges.entries()].slice(0,4096); }
}
