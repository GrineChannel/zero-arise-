import {InternationalRelations} from "./relations.js";
import {TreatyRegistry} from "./treaties.js";
import {AllianceRegistry} from "./alliances.js";
import {TradeRouteRegistry} from "./trade_routes.js";
import {IntelligenceLedger} from "./intelligence.js";
import {decideDiplomaticAction} from "./diplomatic_ai.js";
export class GeopoliticalSimulation{
 constructor(){this.relations=new InternationalRelations();this.treaties=new TreatyRegistry();this.alliances=new AllianceRegistry();this.trade=new TradeRouteRegistry();this.intelligence=new IntelligenceLedger();}
 decide(state,neighbors){return decideDiplomaticAction(state,neighbors);}
 snapshot(){return {relations:this.relations.snapshot(),treaties:this.treaties.snapshot(),alliances:this.alliances.snapshot(),trade:this.trade.snapshot(),intelligence:this.intelligence.snapshot()};}
}
