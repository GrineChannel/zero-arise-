import {ArmyRegistry} from "./armies.js";
import {CommanderRegistry} from "./commanders.js";
import {SiegeRegistry} from "./sieges.js";
import {resolveBattle} from "./battle.js";
import {consumeSupplies} from "./logistics.js";
export class MilitarySimulation{
 constructor(){this.armies=new ArmyRegistry();this.commanders=new CommanderRegistry();this.sieges=new SiegeRegistry();}
 advanceArmy(id,days=1){const a=this.armies.armies.get(id);if(!a)return false;this.armies.armies.set(id,consumeSupplies(a,days));return true;}
 battle(attackerId,defenderId,attackerContext={},defenderContext={}){const a=this.armies.armies.get(attackerId),b=this.armies.armies.get(defenderId);return a&&b?resolveBattle(a,b,attackerContext,defenderContext):null;}
 snapshot(){return {armies:this.armies.snapshot(),commanders:this.commanders.snapshot(),sieges:this.sieges.snapshot()};}
}
