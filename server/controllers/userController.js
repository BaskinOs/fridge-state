// const ModelsRecipe = require('../models/fridgestateModel');
const ModelUser = require('../models/fridgestateModel');

const userController = {};

userController.postUser = (req, res, next) => {
  const { user } = req.body;
  ModelUser.create(user, (err, userCreated) => {
    if (err) {
      console.log(err);
    }
    return next();
  });

userController.getItems = (req, res, next) => {
  ModelUser.find({}, (err, foundItems) => {
    if (err) {
      return next(err);
    }
    res.locals.foundItems = foundItems;
    return next();
  });
};

userController.getRecipes = (req, res, next) {
  ModelUser.find({}, (err, recipes) => {
    if(err) {

    }
  })
}
module.exports = userController;
