const express = require('express');
const recipeRouter = express.Router();

const recipeController = require('../controllers/recipeController');

recipeRouter.post('/recipe', recipeController.getRecipes, (req, res) => {
  console.log(res.locals, 'inside ROUTER');
  res.status(200).json(res.locals);
});

recipeRouter.post(
  '/instructions',
  recipeController.getIntructions,
  (req, res) => {
    res.status(200).json(res.locals);
  }
);

module.exports = recipeRouter;
