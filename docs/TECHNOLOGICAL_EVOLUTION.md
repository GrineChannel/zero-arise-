# Autonomous technological evolution — approved

Civilizations can study materials, assemble inventions from authored components, test prototypes, establish production chains, improve machinery and spread knowledge. Humans and sapient monsters use the same extensible simulation rules.

## Initial implementation
- materials.js: material properties
- components.js: machine components and allowed materials
- inventions.js: compositional device model and statistics
- prototypes.js: bounded test outcome
- production.js: recipe inputs/outputs and resource accounting
- industry.js: abstract workshop production
- innovation.js: invention registry
- technology_simulation.js: orchestration model

## Next integration
Tie workshops to settlement inventories, research prerequisites, NPC inventor decisions, world persistence and Bedrock structures. Add energy and maintenance costs, safety rules, technology exchange and performance tests.

All code above is a pure model. No machines or blocks are registered in Minecraft yet. Recipes and materials are illustrative starting data.
