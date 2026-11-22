import {VEHICLES,availableVehicles} from "./vehicle_catalog.js";
export function proposeTransportInnovation(knowledge=[],needs={}){const unlocked=availableVehicles(knowledge);return unlocked.map(id=>({id,score:(Number(needs[VEHICLES[id].mode])||0)*2+VEHICLES[id].capacity/20-VEHICLES[id].upkeep})).sort((a,b)=>b.score-a.score)[0]||null;}
