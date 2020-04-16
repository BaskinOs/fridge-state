const data = [
  {
    id: 1176849,
    title: 'Scrambled Eggs with Cheddar Cheese',
    image: 'https://spoonacular.com/recipeImages/1176849-312x231.jpg',
    imageType: 'jpg',
    usedIngredientCount: 1,
    missedIngredientCount: 1,
    missedIngredients: [Array],
    usedIngredients: [Array],
    unusedIngredients: [Array],
    likes: 0
  },
  {
    id: 936987,
    title: 'Delicate French Omelet',
    image: 'https://spoonacular.com/recipeImages/936987-312x231.jpg',
    imageType: 'jpg',
    usedIngredientCount: 1,
    missedIngredientCount: 1,
    missedIngredients: [Array],
    usedIngredients: [Array],
    unusedIngredients: [Array],
    likes: 0
  },
  {
    id: 3151,
    title: 'Crunchy Fish Sticks',
    image: 'https://spoonacular.com/recipeImages/3151-312x231.jpg',
    imageType: 'jpg',
    usedIngredientCount: 1,
    missedIngredientCount: 2,
    missedIngredients: [Array],
    usedIngredients: [Array],
    unusedIngredients: [Array],
    likes: 0
  }
];

const result = data.map((recipe) => {
  console.log(recipe.title);
  let obj = {
    id: recipe.id,
    name: recipe.title,
    picUrl: recipe.image
  };
  return obj;
});

console.log(result);
