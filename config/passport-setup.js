const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

passport.use(
  new GoogleStrategy({
    //options for strat
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/auth/google/callback'
  }, () => {
    //passport callback function
  })
)