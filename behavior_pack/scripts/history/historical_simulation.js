import {WorldChronicle} from "./chronicle.js";
import {FamilyRegistry} from "./generations.js";
import {DynastyRegistry} from "./dynasties.js";
import {LegendRegistry} from "./legends.js";
import {HistoricalInterpretations} from "./interpretations.js";
import {HistoricalArchive} from "./archives.js";
import {LostCivilizationRegistry} from "./ancient_civilizations.js";
export class HistoricalSimulation{
 constructor(){this.chronicle=new WorldChronicle();this.families=new FamilyRegistry();this.dynasties=new DynastyRegistry();this.legends=new LegendRegistry();this.interpretations=new HistoricalInterpretations();this.archives=new HistoricalArchive();this.ancient=new LostCivilizationRegistry();}
 record(event){return this.chronicle.record(event);}
 snapshot(){return {chronicle:this.chronicle.snapshot(),families:this.families.snapshot(),dynasties:this.dynasties.snapshot(),legends:this.legends.snapshot(),interpretations:this.interpretations.snapshot(),archives:this.archives.snapshot(),ancient:this.ancient.snapshot()};}
}
