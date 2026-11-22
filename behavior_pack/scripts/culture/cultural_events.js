export const CULTURAL_EVENT_EFFECTS=Object.freeze({
 devastating_war:{militarism:-3,cooperation:2,tradeOpenness:-2},
 peaceful_trade:{tradeOpenness:3,cooperation:2,curiosity:1},
 great_discovery:{curiosity:4,tradition:-1},
 famine:{cooperation:2,tradeOpenness:-1},
 reform:{liberty:3,equality:3,tradition:-2},
 cultural_renaissance:{curiosity:3,tradition:2,spirituality:1}
});
export function eventValueChanges(eventType){return {...(CULTURAL_EVENT_EFFECTS[eventType]||{})};}
