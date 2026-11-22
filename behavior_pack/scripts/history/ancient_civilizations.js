export class LostCivilizationRegistry{
 constructor(){this.sites=new Map();}
 register({id,formerStateId,ruinId,collapseDay=0,knowledgeIds=[]}){
  if(!id||this.sites.has(id))return false;
  this.sites.set(id,{id,formerStateId,ruinId,collapseDay,knowledgeIds:[...knowledgeIds].slice(0,64),excavated:false});return true;
 }
 excavate(id){const site=this.sites.get(id);if(!site)return null;site.excavated=true;return {...site,knowledgeIds:[...site.knowledgeIds]};}
 snapshot(){return [...this.sites.values()].map(s=>({...s,knowledgeIds:[...s.knowledgeIds]}));}
}
