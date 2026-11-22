# Full economic evolution — approved

NPC enterprises, employment, production chains, local markets, currencies, exchange, banks, loans, taxes, public budgets and economic crises.

## Modules
money, enterprises, markets, production_chains, banking, taxation, exchange, crises, employment, economic_simulation.

## Design
Use integer smallest currency units for transfers and pricing. Market quotes reflect demand and supply with bounded price movement. Regional economic models run abstractly outside loaded areas. War, trade, technology, disasters and political decisions will affect supply and demand.

## Integration remaining
Connect faction/settlement economies, existing technology recipes, NPC careers, trade routes, world clock, event queue, persistence, bank ledger and double-entry accounting. The bank model currently tracks deposits and loans but not real source-wallet debits, repayments or default; do not expose it as a complete financial transaction system. Add inflation metrics, periodic taxation, consumption, inventory conservation and Bedrock gameplay hooks. These modules are not yet active in-game.
