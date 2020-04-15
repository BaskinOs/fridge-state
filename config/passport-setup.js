const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const { User } = require('../server/models/fridgestateModel');

//called after done() - grab info from user to store in cookie
passport.serializeUser((user, done) => {
  done(null, user.id); //user id passed to cookie
})

//use id to find user, pass user to next stage
passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  })
})

passport.use(
  new GoogleStrategy({
    //options for strat
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/auth/google/callback'
  }, (accessToken, refreshToken, profile, done) => { // params received from callback
    //check if user already exists
    User.findOne({providerId: profile.id}).then ((currentUser) => {
      if(currentUser) {
        // console.log('user found', currentUser);
        done(null, currentUser);
      }
      else { //create a new user
        new User({ 
          userName: profile.displayName,
          providerId: profile.id
        }).save().then((newUser) => {
          // console.log('new user created', newUser);
          done(null, newUser);
        })
      }
    })
  })
)