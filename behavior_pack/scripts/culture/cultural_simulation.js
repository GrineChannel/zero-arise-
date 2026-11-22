import {createValues,shiftValues} from "./values.js";
import {eventValueChanges} from "./cultural_events.js";
import {exchangeCulturalValues} from "./diffusion.js";
import {TraditionRegistry} from "./traditions.js";
import {PhilosophyRegistry} from "./philosophy.js";
import {BeliefRegistry} from "./beliefs.js";
import {CulturalMovementRegistry} from "./movements.js";
export class CulturalSimulation{
 constructor(){this.cultures=new Map();this.traditions=new TraditionRegistry();this.philosophies=new PhilosophyRegistry();this.beliefs=new BeliefRegistry();this.movements=new CulturalMovementRegistry();}
 foundCulture(id,values={}){if(!id||this.cultures.has(id))return false;this.cultures.set(id,createValues(values));return true;}
 event(id,eventType){const v=this.cultures.get(id);if(!v)return false;this.cultures.set(id,shiftValues(v,eventValueChanges(eventType)));return true;}
 contact(sourceId,targetId,options){const a=this.cultures.get(sourceId),b=this.cultures.get(targetId);if(!a||!b)return false;this.cultures.set(targetId,exchangeCulturalValues(a,b,options));return true;}
 snapshot(){return {cultures:[...this.cultures.entries()],traditions:this.traditions.snapshot(),philosophies:this.philosophies.snapshot(),beliefs:this.beliefs.snapshot(),movements:this.movements.snapshot()};}
}
