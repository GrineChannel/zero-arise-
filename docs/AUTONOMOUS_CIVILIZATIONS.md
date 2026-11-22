# Autonomous civilizations — approved

Human, monster and mixed societies can evolve government, traditions, social structures, diplomacy and political movements without requiring player participation.

## Political systems
Tribal, monarchy, republic, military government, magocracy, council and federation. States may change government through reforms, succession, coups, uprisings or negotiated transitions.

## Culture
Culture is a collection of adjustable traits rather than a hard-coded species stereotype. Traditions can spread through trade, migration and education.

## Social simulation
Individuals are active near the player. Distant regions use aggregated social groups to avoid thousands of per-NPC updates.

## Initial code
- politics.js: government types, legitimacy, stability and political pressure
- culture.js: culture traits and exchange
- social_groups.js: abstract social cohorts
- state_events.js: event proposals
- decision_engine.js: policy proposals

These are pure logic modules. No in-world autonomous construction, regime changes, NPC decision-making or persistence integration is implemented yet.
