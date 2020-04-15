 //const ModelsRecipe = require('../models/fridgestateModel');
const { ModelUser } = require('../models/fridgestateModel');

const userController = {};

userController.getIngredients = (req, res, next) => {
  ModelUser.findById("5e9672ca8687611204c9b017", (err, user) => {
    console.log(user)
    if (err) {
      return next(err);
    }
    res.locals.ingredients = user.ingredients;
    return next();
  });
};

userController.getRecipes = (req, res, next) => {
    ModelUser.findById("5e9672ca8687611204c9b017", (err, user) => {
      console.log(user)
      if (err) {
        return next(err);
      }
      res.locals.savedRecipes = user.savedRecipes;
      return next();
    });
  };

userController.postIngredient = (req, res, next) => {
  const { ingredient } = req.body;
  console.log(ingredient);
  ModelUser.findOneAndUpdate({_id:"5e9672ca8687611204c9b017"}, {"$push": {"ingredients":ingredient}},{new:true})
  .then(user => {
    res.locals.ingredients = user.ingredients;
    return next();  
  })
  .catch(err => console.log(err))
};

userController.postRecipe = (req, res, next) => {
    //you can add more options inside for example calories, time
    const { recipeName, recipeUrl } = req.body;
    const newRecipe = {recipeName, recipeUrl}
    //id needs to be replaced dSer userId
    ModelUser.findOneAndUpdate({_id:"5e9672ca8687611204c9b017"}, {"$push": {"savedRecipes":newRecipe}},{new:true})
    .then(user => {
      res.locals.savedRecipes = user.savedRecipes;
      return next();  
    })
    .catch(err => console.log(err))
  };


module.exports = userController
