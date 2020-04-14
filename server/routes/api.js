const express = require('express');

const userController = require('../controllers/userController');

const apiRouter = express.Router();

apiRouter.post('/user', (req, res, next) => {
  res.send(200);
});

apiRouter.get('/items', userController.getItems, (req, res, next) => {
  res.send(200).json(res.locals.foundItems);
});
//* *---**
apiRouter.get('/items', userController.getRecipes, (req, res, next) => {
  res.send(200).json(res.locals.recipes);
});

module.exports = apiRouter;
