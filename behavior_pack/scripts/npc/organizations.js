export const ORGANIZATION_TYPES = Object.freeze(["guild","company","political_movement","military_order","academy","community"]);
export class OrganizationRegistry {
  constructor() { this.organizations = new Map(); }
  found({ id, name, type, founderId, factionId = null }) {
    if (typeof id!=="string" || !id || this.organizations.has(id) || !ORGANIZATION_TYPES.includes(type)) return false;
    this.organizations.set(id,{ id,name:String(name||id),type,founderId:String(founderId),leaderId:String(founderId),factionId,members:[String(founderId)],treasury:0 });
    return true;
  }
  join(id,npcId) { const org=this.organizations.get(id); if (!org) return false; const member=String(npcId); if (!org.members.includes(member)) org.members.push(member); return true; }
  get(id) { return this.organizations.get(id); }
  snapshot() { return [...this.organizations.values()].map(o=>({...o,members:[...o.members]})); }
}
