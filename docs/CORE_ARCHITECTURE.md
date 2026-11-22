# Simulation core

Initial standalone modules:
- `EventQueue`: bounded, deferred events
- `TickBudget`: fixed per-update operation budget
- `RegionRegistry`: aggregate state for distant regions
- `WorldClock`: pure clock data model
- `SimulationCore`: orchestration for the above

These modules are foundations, not proof of a working in-game simulation. They are intentionally separate from Bedrock APIs for easier unit testing.

## Integration pending
- Clock persistence and real-time advancement
- Minecraft day/night synchronization (if feasible)
- Region persistence with data size limits
- Loading/unloading entity handling
- Automated tests and Android device tests

Avoid modifying unloaded chunks. Do not spawn remote NPCs to simulate their activities.
