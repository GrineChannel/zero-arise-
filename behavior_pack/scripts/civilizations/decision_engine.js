import { normalizePolitics, evaluatePoliticalPressure } from "./politics.js";
import { proposeStateEvents } from "./state_events.js";
export function evaluateState(state, society = {}) {
  const politics = normalizePolitics(state.politics);
  const metrics = evaluatePoliticalPressure(politics,society);
  const proposals = proposeStateEvents({ ...state, politics },metrics);
  return { politics, metrics, proposals };
}
export function choosePolicy(evaluation) {
  const { politics, metrics } = evaluation;
  if (metrics.reformDemand && politics.taxation > 0.05) return { action:"reduce_tax", amount:0.02 };
  if (metrics.revoltRisk) return { action:"negotiate", urgency:"high" };
  return { action:"maintain" };
}
