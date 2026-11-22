import { Workshop } from "./industry.js";
import { InnovationRegistry } from "./innovation.js";
export class TechnologySimulation {
  constructor() { this.innovations=new InnovationRegistry();this.workshops=new Map(); }
  addWorkshop(id,recipeId,workers=1) {
    if (this.workshops.has(id)) return false;
    this.workshops.set(id,new Workshop(id,recipeId,workers));
    return true;
  }
  advanceWorkshop(id,inventory,hours=1) {
    const workshop=this.workshops.get(id);
    return workshop?workshop.advance(inventory,hours):0;
  }
  snapshot() {
    return {innovations:this.innovations.snapshot(),workshops:[...this.workshops.values()].map(w=>({id:w.id,recipeId:w.recipeId,workers:w.workers,progress:w.progress}))};
  }
}
