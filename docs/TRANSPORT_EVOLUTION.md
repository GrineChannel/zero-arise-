# Full transport evolution — approved

Autonomous transport spans land, river, sea, rail, air and magical mobility. Technology unlocks authored vehicle archetypes. Civilizations plan networks, dispatch shipments, maintain vehicles and react to infrastructure damage.

## Modules
vehicle_catalog, vehicles, networks, routing, shipments, maintenance, infrastructure, innovation, transport_simulation.

## Design
Loaded regions can eventually materialize vehicles and road structures; unloaded regions simulate aggregated shipment progress. Avoid spawning entities or modifying unloaded chunks. Portals and magic routes require research and bounded energy/capacity. Network routing uses bounded Dijkstra search.

## Integration remaining
Connect economic inventories and trade routes, civilization planning, construction, tech research, disaster damage, military logistics, persistence and Bedrock entity behavior. Implement cargo reservation/delivery conservation, multi-modal transfers, route interruptions, passenger movement and actual visual vehicles. Current modules are abstract and not yet active in Minecraft.
