// const ModelsRecipe = require('../models/fridgestateModel');
const { ModelUser } = require('../models/fridgestateModel');
const userController = {};

//controller to verify user login
userController.verify = (req, res, next) => {
  try {
    //use userId in req.session.user to verify user
    if (req.session.passport.user) {
      console.log('userController.verify req.session.passport', req.session.passport);
      let id = req.session.passport.user;
      ModelUser.findById(id).then((user) => {
        if(!user) res.locals = { isLoggedIn: false };
        else res.locals = { isLoggedIn: true };
        return next();
      })
    }
    else { //passport has not been set up yet
      console.log('userController.verify req.session.passport.user is undefined', req.session.passport);
      res.locals = { isLoggedIn: false };
      return next();
    }
  } catch (err) {
    return next({
      log: `Error in middleware userController.verifyUser: ${err}`,
    });
  }
}

userController.postUser = (req, res, next) => {
  const { user } = req.body;
  ModelUser.create(user, (err, userCreated) => {
    if (err) {
      console.log(err);
    }
    return next();
  });
}

userController.getItems = (req, res, next) => {
  ModelUser.find({}, (err, foundItems) => {
    if (err) {
      return next(err);
    }
    res.locals.foundItems = foundItems;
    return next();
  });
};

userController.getRecipes = (req, res, next) => {
  ModelUser.find({}, (err, recipes) => {
    if(err) {

    }
  })
}

module.exports = userController;
