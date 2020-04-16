const express = require('express');
const recipeRouter = express.Router();

const recipeController = require('../controllers/recipeController');

recipeRouter.get('/recipe', recipeController.getRecipes, (req, res) => {
  console.log(res.locals, 'inside ROUTER');
  res.status(200).json(res.locals);
});

recipeRouter.get(
  '/instructions',
  recipeController.getIntructions,
  (req, res) => {
    res.status(200).json(res.locals);
  }
);

module.exports = recipeRouter;
