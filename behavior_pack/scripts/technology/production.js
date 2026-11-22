export const RECIPES = Object.freeze({
  planks:{inputs:{logs:1},outputs:{planks:4},work:1},
  iron_ingot:{inputs:{iron_ore:2,fuel:1},outputs:{iron_ingot:1},work:3},
  copper_ingot:{inputs:{copper_ore:2,fuel:1},outputs:{copper_ingot:1},work:3},
  iron_parts:{inputs:{iron_ingot:2},outputs:{iron_parts:1},work:2},
  gear_assembly:{inputs:{iron_parts:2,copper_ingot:1},outputs:{gears:1},work:4},
  mana_cell:{inputs:{crystal:2,copper_ingot:1},outputs:{mana_cells:1},work:6}
});
export function canProduce(inventory,recipeId) {
  const recipe=RECIPES[recipeId];
  return Boolean(recipe&&Object.entries(recipe.inputs).every(([key,n])=>(Number(inventory[key])||0)>=n));
}
export function produce(inventory,recipeId) {
  if (!canProduce(inventory,recipeId)) return false;
  const recipe=RECIPES[recipeId];
  for (const [key,n] of Object.entries(recipe.inputs)) inventory[key]-=n;
  for (const [key,n] of Object.entries(recipe.outputs)) inventory[key]=(Number(inventory[key])||0)+n;
  return true;
}
