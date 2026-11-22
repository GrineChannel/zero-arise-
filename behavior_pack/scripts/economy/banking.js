import {money} from "./money.js";
export class BankRegistry{
 constructor(){this.banks=new Map();}
 open(id,ownerId,reserves=0){if(!id||this.banks.has(id))return false;this.banks.set(id,{id,ownerId,reserves:money(reserves),deposits:{},loans:{},solvent:true});return true;}
 deposit(id,clientId,amount){const b=this.banks.get(id),n=money(amount);if(!b||!b.solvent||!clientId||n<=0)return false;b.reserves+=n;b.deposits[clientId]=money(b.deposits[clientId])+n;return true;}
 lend(id,clientId,amount){const b=this.banks.get(id),n=money(amount);if(!b||!b.solvent||!clientId||n<=0||b.reserves<n)return false;b.reserves-=n;b.loans[clientId]=money(b.loans[clientId])+n;return true;}
 assess(id){const b=this.banks.get(id);if(!b)return null;const liabilities=Object.values(b.deposits).reduce((s,n)=>s+n,0);const assets=b.reserves+Object.values(b.loans).reduce((s,n)=>s+n,0);b.solvent=assets>=liabilities;return {assets,liabilities,solvent:b.solvent};}
 snapshot(){return [...this.banks.values()].map(b=>({...b,deposits:{...b.deposits},loans:{...b.loans}}));}
}
