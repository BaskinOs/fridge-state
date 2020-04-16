require('dotenv').config();
const fetch = require('node-fetch');

const recipeController = {};

recipeController.getRecipes = (req, res, next) => {
  // const { ing1, ing2, ing3, ing4, ing5 } = req.body;

  fetch(
    'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=1&ranking=1&ignorePantry=true&ingredients=apples,flour,sugar',
    {
      method: 'GET',
      headers: {
        'x-rapidapi-host':
          'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
        'x-rapidapi-key': process.env.API_APP_KEY
      }
    }
  )
    .then((res) => res.json())
    .then((data) => {
      // console.log(data, 'THIS is data inside RECIPES CONTROLLER');
      res.locals.data = data;
      return next();
    })
    .catch((err) => (res.locals.error = err));
};

recipeController.getIntructions = (req, res, next) => {
  // const { recipe_id } = req.body;

  fetch(
    'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/48191/information',
    {
      method: 'GET',
      headers: {
        'x-rapidapi-host':
          'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
        'x-rapidapi-key': process.env.API_APP_KEY
      }
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data, 'this is data inside INSTRUCTIONS');
      res.locals.data = data;
      return next();
    })
    .catch((err) => (res.locals.error = err));
};

module.exports = recipeController;
