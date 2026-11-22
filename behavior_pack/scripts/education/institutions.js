import {INSTITUTIONS} from "./institution_catalog.js";
export class InstitutionRegistry{
 constructor(limit=512){this.limit=limit;this.institutions=new Map();}
 establish({id,type,settlementId,ownerId=null,quality=50}){if(!id||!INSTITUTIONS[type]||this.institutions.has(id)||this.institutions.size>=this.limit)return false;this.institutions.set(id,{id,type,settlementId,ownerId,quality:Math.max(0,Math.min(100,Number(quality)||0)),teachers:[],students:[],knowledgeIds:[],active:true});return true;}
 enroll(id,npcId){const a=this.institutions.get(id);if(!a||!a.active||a.students.includes(npcId)||a.students.length>=INSTITUTIONS[a.type].capacity)return false;a.students.push(npcId);return true;}
 employTeacher(id,npcId){const a=this.institutions.get(id);if(!a||!a.active||a.teachers.includes(npcId)||a.teachers.length>=20)return false;a.teachers.push(npcId);return true;}
 snapshot(){return [...this.institutions.values()].map(a=>({...a,teachers:[...a.teachers],students:[...a.students],knowledgeIds:[...a.knowledgeIds]}));}
}
