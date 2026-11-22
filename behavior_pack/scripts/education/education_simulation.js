import {InstitutionRegistry} from "./institutions.js";
import {ResearchInstituteRegistry} from "./research_institutes.js";
import {study} from "./learning.js";
export class EducationSimulation{
 constructor(){this.institutions=new InstitutionRegistry();this.research=new ResearchInstituteRegistry();}
 teach(student,subject,options){return study(student,subject,options);}
 snapshot(){return {institutions:this.institutions.snapshot(),research:this.research.snapshot()};}
}
