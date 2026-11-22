export class ConstructionQueue{
 constructor(limit=64){this.limit=Math.max(1,Math.min(256,Math.floor(limit)));this.projects=[];}
 enqueue(blueprint){if(!blueprint||this.projects.length>=this.limit)return false;this.projects.push({...blueprint,progress:0});return true;}
 advance(workers,materials,hours=1){
  const project=this.projects[0];if(!project)return null;
  const work=Math.max(0,Math.min(100,(Number(workers)||0)*Math.max(0,Math.min(24,Number(hours)||0))));
  if(work<=0)return null;
  if(!project.paid){
   if(!Object.entries(project.materials).every(([k,n])=>(Number(materials[k])||0)>=n))return null;
   for(const [k,n] of Object.entries(project.materials))materials[k]-=n;
   project.paid=true;
  }
  project.progress=Math.min(100,project.progress+work);
  if(project.progress>=100){this.projects.shift();return {...project,phase:"completed"};}
  return null;
 }
 snapshot(){return this.projects.map(p=>({...p,materials:{...p.materials}}));}
}
