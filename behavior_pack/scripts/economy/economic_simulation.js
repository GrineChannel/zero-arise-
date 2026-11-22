import {EnterpriseRegistry} from "./enterprises.js";
import {MarketRegistry} from "./markets.js";
import {BankRegistry} from "./banking.js";
import {CurrencyRegistry} from "./money.js";
import {ExchangeRegistry} from "./exchange.js";
import {evaluateEconomicCrisis} from "./crises.js";
export class EconomicSimulation{
 constructor(){this.enterprises=new EnterpriseRegistry();this.markets=new MarketRegistry();this.banks=new BankRegistry();this.currencies=new CurrencyRegistry();this.exchange=new ExchangeRegistry();}
 evaluateRegion(indicators){return evaluateEconomicCrisis(indicators);}
 snapshot(){return {enterprises:this.enterprises.snapshot(),markets:this.markets.snapshot(),banks:this.banks.snapshot(),currencies:this.currencies.snapshot(),exchange:this.exchange.snapshot()};}
}
