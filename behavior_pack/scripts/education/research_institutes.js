export class ResearchInstituteRegistry{
 constructor(){this.projects=new Map();}
 start({id,institutionId,knowledgeId,required=100}){if(!id||this.projects.has(id))return false;this.projects.set(id,{id,institutionId,knowledgeId,required:Math.max(1,Number(required)||100),progress:0,completed:false});return true;}
 contribute(id,researchPower){const p=this.projects.get(id);if(!p||p.completed)return false;p.progress=Math.min(p.required,p.progress+Math.max(0,Math.min(100,Number(researchPower)||0)));p.completed=p.progress>=p.required;return p.completed;}
 snapshot(){return [...this.projects.values()].map(p=>({...p}));}
}
