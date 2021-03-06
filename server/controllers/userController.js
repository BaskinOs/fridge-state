// const ModelsRecipe = require('../models/fridgestateModel');
const { ModelUser } = require('../models/fridgestateModel');

const userController = {};

//controller to verify user login
userController.verify = (req, res, next) => {
  try {
    //use userId in req.session.user to verify user
    if (req.session.passport.user) {
      let id = req.session.passport.user;
      ModelUser.findById(id).then((user) => {
        // console.log(user);
        if (!user) res.locals = { isLoggedIn: false };
        // else res.locals = { isLoggedIn: true, user: user };
        else res.locals = { isLoggedIn: true, user: user };
        return next();
      });
    } else {
      //passport has not been set up yet
      res.locals = { isLoggedIn: false };
      return next();
    }
  } catch (err) {
    return next({
      log: `Error in middleware userController.verify: ${err}`
    });
  }
};

userController.getIngredients = (req, res, next) => {
  // console.log('userCont.getIngred req.session.passport', req.session.passport)
  try {
    if (req.session.passport.user) {
      //passport must be valid
      let id = req.session.passport.user;
      ModelUser.findById(id, (err, user) => {
        if (err) {
          console.log(err);
        }
        res.locals.ingredients = user.ingredients;
        console.log(res.locals.ingredients);
        return next();
      });
    }
  } catch (err) {
    return next({
      log: `Error in middleware userController.getIngredients: ${err}`
    });
  }
};

userController.postUser = (req, res, next) => {
  const { user } = req.body;
  ModelUser.create(user, (err, userCreated) => {
    if (err) {
      console.log(err);
    }
    return next();
  });
};

userController.getRecipes = (req, res, next) => {
  console.log('userCont.getRecipes req.session.passport', req.session.passport);
  try {
    if (req.session.passport.user) {
      let id = req.session.passport.user;
      ModelUser.findById(id, (err, user) => {
        console.log(user);
        if (err) {
          return next(err);
        }
        res.locals.savedRecipes = user.savedRecipes;
        return next();
      });
    }
  } catch (err) {
    return next({
      log: `Error in middleware userController.getRecipes: ${err}`
    });
  }
};

userController.postIngredient = (req, res, next) => {
  try {
    const { ingredient } = req.body;
    // console.log(ingredient);
    if (req.session.passport.user) {
      let id = req.session.passport.user;
      ModelUser.findOneAndUpdate(
        { _id: id },
        { $push: { ingredients: ingredient } },
        { new: true }
      )
        .then((user) => {
          res.locals.ingredients = user.ingredients;
          return next();
        })
        .catch((err) => console.log(err));
    }
  } catch (err) {
    return next({
      log: `Error in middleware userController.postIngredient: ${err}`
    });
  }
};

userController.deleteIngredient = (req, res, next) => {
  console.log('inside deleteIngredient', req.body);
  console.log(req.session.passport.user);
  try {
    if (req.session.passport.user) {
      let id = req.session.passport.user;
      const { ingredient } = req.body;
      ModelUser.updateOne(
        { _id: id },
        { $pull: { ingredients: ingredient } },
        (err, foundIngredient) => {
          if (err) {
            return next(err);
          }
          return next();
        }
      );
    }
  } catch (err) {
    return next({
      log: `Error in middleware userController.deleteIngredient: ${err}`
    });
  }
};

userController.postRecipe = (req, res, next) => {
  console.log('userCont.postRecipe req.session.passport', req.session.passport);
  try {
    if (req.session.passport.user) {
      let id = req.session.passport.user;

      //you can add more options inside for example calories, time
      const { recipeName, recipeUrl } = req.body;
      const newRecipe = { recipeName, recipeUrl };
      //id needs to be replaced dSer userId
      ModelUser.findOneAndUpdate(
        { _id: id },
        { $push: { savedRecipes: newRecipe } },
        { new: true }
      )
        .then((user) => {
          res.locals.savedRecipes = user.savedRecipes;
          return next();
        })
        .catch((err) => console.log(err));
    }
  } catch (err) {
    return next({
      log: `Error in middleware userController.postRecipe: ${err}`
    });
  }
};

module.exports = userController;
