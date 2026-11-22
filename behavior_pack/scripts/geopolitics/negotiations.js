export const DIPLOMATIC_PROPOSALS=Object.freeze(["trade","non_aggression","defense","peace","research_exchange"]);
export function evaluateProposal(proposal,{trust=0,benefit=0,threat=0,warExhaustion=0}={}){
 if(!DIPLOMATIC_PROPOSALS.includes(proposal))return {accepted:false,score:-Infinity};
 const score=(Number(trust)||0)*0.35+(Number(benefit)||0)*0.4+(Number(warExhaustion)||0)*(proposal==="peace"?0.5:0)-(Number(threat)||0)*(proposal==="defense"?-0.25:0.2);
 return {accepted:score>=15,score};
}
