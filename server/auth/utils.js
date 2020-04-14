// import passport from 'passport';
// import { UserModel } from '../database/schema';

// const setup = () => {
//   passport.serializeUser((user, done) => done(null, user._id));

//   passport.deserializeUser(async (id, done) => {
//     try {
//       const user = await UserModel.findById(id);
//       return done(null, user);
//     } catch (err) {
//       return done(err, null);
//     }
//   })
// }

// export { setup }