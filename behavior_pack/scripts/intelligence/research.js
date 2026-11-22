import { RESEARCH_CATALOG } from "./research_catalog.js";
export class ResearchProject {
  constructor(id) {
    if (!RESEARCH_CATALOG[id]) throw new Error("Unknown research: "+id);
    this.id=id;this.progress=0;this.completed=false;
  }
  contribute(effort,skill,knowledge) {
    if (this.completed) return false;
    const def=RESEARCH_CATALOG[this.id];
    if (!def.requires.every(id=>knowledge.knows(id))) return false;
    const work=Math.max(0,Math.min(10,Number(effort)||0));
    const expertise=Math.max(0,Math.min(100,Number(skill)||0));
    this.progress+=work*(0.25+expertise/100);
    if (this.progress>=def.difficulty) {
      this.completed=knowledge.learn(this.id,1,"research");
    }
    return this.completed;
  }
  snapshot() { return {id:this.id,progress:this.progress,completed:this.completed}; }
}
