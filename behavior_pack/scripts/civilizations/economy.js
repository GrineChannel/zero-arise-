// Aggregate, deterministic production model. No real block changes.
export function simulateSettlementDay(settlement, { foodPerWorker = 1, materialsPerWorker = 0.25, foodPerResident = 0.8 } = {}) {
  const residents = Math.max(0, Math.floor(Number(settlement.population) || 0));
  const workers = Math.floor(residents * 0.5);
  const producedFood = workers * foodPerWorker;
  const consumedFood = residents * foodPerResident;
  const producedMaterials = workers * materialsPerWorker;
  settlement.food = Math.max(0, (Number(settlement.food) || 0) + producedFood - consumedFood);
  settlement.materials = Math.max(0, (Number(settlement.materials) || 0) + producedMaterials);
  return { workers, producedFood, consumedFood, producedMaterials, foodShortage: producedFood + (Number(settlement.food) || 0) < consumedFood };
}
