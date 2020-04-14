import passport from 'passport';
import passportJWT from 'passport-jwt';
import { to } from 'await-to-js';

import { getUserById } from '../../database/user'
import { signToken } from '../utils'

const JWTStrategy = passportJWT.Strategy

//strategy require two arguments: strategyOptions and verifyCallback
const strategy = () => {
  //how to retrieve JWT from request
  const strategyOptions = { 
    jwtFromRequest: req => req.cookies.jwt,
    secretOrKey: process.env.JWT_SECRET,
    passReqToCallback: true
  }

  //token from request to retrieve user from DB
  const verifyCallback = async (req, jwtPayload, cb) => {
    //fetch user from DB given id
    const [err, user] = await to(getUserById(jwtPayload.data._id));
      if (err) {
        return cb(err);
      }
      req.user = user;
      return cb(null, user);
  }

  passport.use(new JWTStrategy(strategyOptions, verifyCallback))
}

const login = (req, user) => {
  return new Promise((resolve, reject) => {
    // TODO
  })
}

export { strategy, login }