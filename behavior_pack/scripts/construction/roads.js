// Grid-level path model; no block changes or pathfinding through loaded chunks.
export class RoadNetwork{
 constructor(){this.nodes=new Map();this.edges=new Map();}
 addNode(id,x,z){if(this.nodes.has(id))return false;this.nodes.set(id,{id,x,z});return true;}
 connect(a,b){if(a===b||!this.nodes.has(a)||!this.nodes.has(b))return false;const key=[a,b].sort().join("|");this.edges.set(key,{a,b});return true;}
 neighbors(id){return [...this.edges.values()].filter(e=>e.a===id||e.b===id).map(e=>e.a===id?e.b:e.a);}
 snapshot(){return {nodes:[...this.nodes.values()],edges:[...this.edges.values()]};}
}
