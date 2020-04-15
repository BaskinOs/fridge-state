// const ModelsRecipe = require('../models/fridgestateModel');
const ModelUser = require('../models/fridgestateModel');

const userController = {};

//controller to verify user login
userController.verify = (req, res, next) => {
  try {
    console.log('userController.verify req.cookies', req.cookies);
    //decrypt userid in cookie
    
    return next();
    // jwt.verify(req.cookies, (err, data) => {
    //   console.log('userController.verify', data);
    //   // if not logged in, immediately report to client
    //   if (err) return res.status(200).json({ isLoggedIn: false });
    //   res.locals = { isLoggedIn: true };
    //   return next();
    // });
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
