export class TraditionRegistry{
 constructor(limit=256){this.limit=Math.max(1,Math.min(1024,Math.floor(limit)));this.traditions=new Map();}
 establish({id,cultureId,originEventId=null,kind="festival",day=0}){if(!id||this.traditions.has(id)||this.traditions.size>=this.limit)return false;this.traditions.set(id,{id,cultureId,originEventId,kind,day,followers:0,prestige:50});return true;}
 update(id,{followersDelta=0,prestigeDelta=0}={}){const t=this.traditions.get(id);if(!t)return false;t.followers=Math.max(0,t.followers+(Number(followersDelta)||0));t.prestige=Math.max(0,Math.min(100,t.prestige+(Number(prestigeDelta)||0)));return true;}
 snapshot(){return [...this.traditions.values()].map(t=>({...t}));}
}
