# Autonomous monster civilizations — approved design

Sapient monster species may establish settlements, states, guilds, militaries, trade routes, schools of magic, and technological traditions. Other species remain wildlife. Human and monster factions may be hostile, neutral, trading partners or allies; mixed societies are possible.

## Implementation phases
1. Data model: species archetypes, factions, settlements, bilateral diplomacy and abstract economy.
2. Persist the model in world dynamic properties with size bounds and schema versioning.
3. Active-region NPC agents, bounded decisions and player-facing interactions.
4. Structures, combat, diplomacy events, logistics, dynasties and research.

## Safety and performance
Remote societies run as aggregate simulation. Do not spawn thousands of NPCs or modify unloaded blocks. Protected player territory must be checked before any construction or magical world edit.

## Current implementation
Only phase 1 data models and deterministic daily production calculations exist. No in-game monster AI, autonomous city construction, real trading, combat or persistent world integration is present yet.
