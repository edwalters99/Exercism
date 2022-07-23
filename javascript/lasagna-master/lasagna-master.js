/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(timerInMins = null) {
  if (timerInMins === null) return 'You forgot to set the timer.';
  if (timerInMins === 0) return 'Lasagna is done.';
  return 'Not done, please wait.';
};

export function preparationTime(layers, prepTimeInMins = 2) {
  return layers.length * prepTimeInMins;
};

export function quantities(layers) {
  const quantity = {
    noodles: 0,
    sauce: 0,
  };
  const noodleGramsPerLayer = 50;
  const sauceLitresPerLayer = 0.2;
  for (let layer of layers) {
    if (layer === 'noodles') quantity.noodles += noodleGramsPerLayer;
    if (layer === 'sauce') quantity.sauce += sauceLitresPerLayer
  }
  return quantity;
};

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length -1]);
};

export function scaleRecipe(recipe, numPortions) {
  const RECIPE_PORTION_SIZE = 2;
  const scaledRecipe = {...recipe};
  for (let ingredient in scaledRecipe) {
    scaledRecipe[ingredient] *= numPortions / RECIPE_PORTION_SIZE;
  }
  return scaledRecipe;
};
