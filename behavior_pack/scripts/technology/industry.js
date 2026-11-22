import { canProduce,produce } from "./production.js";
export class Workshop {
  constructor(id,recipeId,workers=1) { this.id=String(id);this.recipeId=recipeId;this.workers=Math.max(0,Math.floor(Number(workers)||0));this.progress=0; }
  advance(inventory,hours=1) {
    const delta=Math.max(0,Math.min(24,Number(hours)||0))*this.workers;
    this.progress=Math.min(10000,this.progress+delta);
    let produced=0;
    const costs={planks:1,iron_ingot:3,copper_ingot:3,iron_parts:2,gear_assembly:4,mana_cell:6};
    const work=costs[this.recipeId];
    if (!work) return 0;
    while (this.progress>=work && produced<16 && canProduce(inventory,this.recipeId)) {
      if (!produce(inventory,this.recipeId)) break;
      this.progress-=work;produced++;
    }
    return produced;
  }
}
