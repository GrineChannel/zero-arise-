import { ResearchProject } from "./research.js";
import { KnowledgeBase } from "./knowledge.js";
export class CollectiveResearch {
  constructor() { this.knowledge=new KnowledgeBase();this.projects=new Map(); }
  start(id) { if (this.projects.has(id)) return false;try{this.projects.set(id,new ResearchProject(id));return true;}catch{return false;} }
  advance(id,effort,skill) {
    const project=this.projects.get(id);
    if (!project) return false;
    return project.contribute(effort,skill,this.knowledge);
  }
  snapshot() { return {knowledge:this.knowledge.snapshot(),projects:[...this.projects.values()].map(p=>p.snapshot())}; }
  restore(state) {
    this.knowledge.restore(state?.knowledge);
    this.projects.clear();
    for (const record of (Array.isArray(state?.projects)?state.projects:[]).slice(0,64)) {
      try { const p=new ResearchProject(record.id);p.progress=Math.max(0,Number(record.progress)||0);p.completed=Boolean(record.completed);this.projects.set(p.id,p); }catch{}
    }
  }
}
