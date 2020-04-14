const express = require("express");
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const authRouter = express.Router();

// authRouter.get('/login', (req, res) => {
//   const { email, password } = req.body
//   return res.status(200).json({ success: true, data })
// })

// authRouter.post('/register', async (req, res) => {
//   const { firstName, lastName, email, password } = req.body
//   return res.status(200).json({ success: true, data: null })
// })

//auth logout
authRouter.get('/logout', (req, res) => {
  console.log('in /logout');
  //handle with passport
  res.send('loggin out')
})

//auth with google
authRouter.get('/google', (req, res) => {
  console.log('in /google');
  //handle with passport
  res.send('logging in with google');
})

authRouter.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/auth' }),
  function(req, res) {
    res.redirect('/');
  });

module.exports= authRouter;