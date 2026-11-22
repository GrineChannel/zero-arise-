import {VehicleRegistry} from "./vehicles.js";
import {TransportNetwork} from "./networks.js";
import {ShipmentRegistry} from "./shipments.js";
import {shortestRoute} from "./routing.js";
export class TransportSimulation{
 constructor(){this.vehicles=new VehicleRegistry();this.network=new TransportNetwork();this.shipments=new ShipmentRegistry();}
 route(from,to,mode){return shortestRoute(this.network,from,to,mode);}
 advance(days=1){return this.shipments.advance(days);}
 snapshot(){return {vehicles:this.vehicles.snapshot(),network:this.network.snapshot(),shipments:this.shipments.snapshot()};}
}
