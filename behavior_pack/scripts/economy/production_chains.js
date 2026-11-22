export const ECONOMIC_RECIPES=Object.freeze({
 lumber:{inputs:{logs:2},outputs:{planks:4},labor:1},
 flour:{inputs:{wheat:3},outputs:{flour:2},labor:1},
 bread:{inputs:{flour:2,water:1},outputs:{bread:3},labor:2},
 iron:{inputs:{iron_ore:2,coal:1},outputs:{iron_ingot:1},labor:2},
 tools:{inputs:{iron_ingot:2,planks:1},outputs:{tools:1},labor:3},
 mana_device:{inputs:{crystal:2,iron_ingot:1},outputs:{mana_device:1},labor:4}
});
export function executeRecipe(stock,recipeId,workers=1){const recipe=ECONOMIC_RECIPES[recipeId];if(!recipe||workers<recipe.labor)return false;for(const [k,n] of Object.entries(recipe.inputs))if((Number(stock[k])||0)<n)return false;for(const [k,n] of Object.entries(recipe.inputs))stock[k]-=n;for(const [k,n] of Object.entries(recipe.outputs))stock[k]=(Number(stock[k])||0)+n;return true;}
