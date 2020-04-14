const express = require("express");
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const authRouter = express.Router();

// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:3000/auth/google/callback"
},
function(accessToken, refreshToken, profile, done) {
     User.findOrCreate({ googleId: profile.id }, function (err, user) {
       return done(err, user);
     });
}
));

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
  // res.send('logging in with google');
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] })
})

authRouter.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/auth' }),
  function(req, res) {
    res.redirect('/');
  });

module.exports= authRouter;