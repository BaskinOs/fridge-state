const express = require('express');

const userController = require('../controllers/userController');

const apiRouter = express.Router();

apiRouter.post('/ingredient', userController.postIngredient, (req, res, next) => {
  res.status(200).json(res.locals.ingredients);
});

apiRouter.get('/ingredients', userController.getIngredients, (req, res, next) => {
  res.status(200).json(res.locals.ingredients);
});

apiRouter.get('/recipes', userController.getRecipes, (req, res, next) => {
    res.status(200).json(res.locals.savedRecipes);
  });

apiRouter.post('/recipe', userController.postRecipe, (req, res, next) => {
    res.status(200).json(res.locals.savedRecipes);
  });




//* *---**
// apiRouter.get('/items', userController.getRecipes, (req, res, next) => {
//   res.send(200).json(res.locals.recipes);
// });

module.exports = apiRouter;
