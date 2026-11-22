# Free NPC society — approved design

Sapient NPCs have evolving personalities, personal goals, needs, bounded event memories, relationships, careers and organizations. They may change jobs, migrate, form families, establish guilds, participate in politics and seek leadership. These choices depend on opportunities, laws, skills, relationships and consequences.

## Implemented pure modules
personality.js, needs.js, goals.js, memory.js, decision_engine.js, relationships.js, career.js, organizations.js.

## Still required
- Persistent NPC identity and lifecycle
- Integration with Bedrock entity events and world simulation
- Autonomous movement, navigation and physical actions
- Social rules, law enforcement, economy and organizations acting in the world
- Performance testing on Android

The modules currently calculate abstract NPC state and intentions. They do not yet create or control live NPC entities.
