// Descriptive archetypes, not Bedrock entity registrations.
export const SPECIES_ARCHETYPES = Object.freeze({
  human: { intelligence: "sapient", society: true },
  goblin: { intelligence: "sapient", society: true },
  orc: { intelligence: "sapient", society: true },
  demon: { intelligence: "sapient", society: true },
  beast: { intelligence: "animal", society: false }
});
export function canFoundSettlement(speciesId, overrides = {}) {
  if (typeof overrides[speciesId] === "boolean") return overrides[speciesId];
  return SPECIES_ARCHETYPES[speciesId]?.society === true;
}
