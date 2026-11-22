import { createInvention } from "./inventions.js";
export class InnovationRegistry {
  constructor(limit=128) { this.limit=Math.max(1,Math.min(512,Math.floor(limit)));this.inventions=new Map(); }
  register(id,parts,creatorId=null,day=0) {
    if (this.inventions.has(id)||this.inventions.size>=this.limit) return false;
    const invention=createInvention(id,parts);
    if (!invention) return false;
    this.inventions.set(id,{...invention,creatorId,day});
    return true;
  }
  get(id) { return this.inventions.get(id)||null; }
  snapshot() { return [...this.inventions.values()].map(i=>({...i,parts:i.parts.map(p=>({...p})),stats:{...i.stats}})); }
}
