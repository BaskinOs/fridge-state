const express = require("express");
const passport = require('passport');

const userController = require('../controllers/userController');

const authRouter = express.Router();

//auth logout
authRouter.get('/logout', (req, res) => {
  console.log('in /logout');
  //handle with passport
  res.send('loggin out')
})

//checks if user is logged in
const authCheck = (req, res, next) => {
  if(!req.user) { //user not logged in
    res.redirect('/');
  }
  else {
    next();
  }
}

//callback route for google redirect
//pass code received from google to passport
authRouter.get('/google/callback', passport.authenticate('google'), authCheck, (req, res) => {
  //req.user has user info from cookie
  //redirect logged in user to dashboard
  res.locals.user = req.user;
  res.redirect('http://localhost:8080/dashboard');
});

authRouter.get('/verify', userController.verify, (req, res) => {
  res.status(200).json(res.locals);
})

//auth with google using passport
authRouter.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));


module.exports= authRouter;