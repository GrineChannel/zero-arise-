# Architectural evolution — approved

NPC civilizations plan settlements, develop distinct architectural styles, choose zoning, build roads, establish infrastructure, and upgrade or rebuild structures according to needs, technology, resources and terrain.

## Initial pure modules
building_catalog, styles, blueprints, zoning, placement, roads, infrastructure, city_planner, construction_queue.

## Security and performance
Never build inside player-protected territory. Remote construction is abstract. On loaded chunks, any eventual materialization must validate terrain, ownership, blocks and safety, with a bounded block edit budget and rollback or cancellation strategy.

## Not yet implemented
No Bedrock block placement, terrain sampling, chunk detection, entity builders, structure templates or save integration. The current code only plans and tracks abstract projects. Blueprint shapes are footprints, not physical block structures.
