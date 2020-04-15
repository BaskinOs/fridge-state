const mongoose = require('mongoose');

const { Schema } = mongoose;
const myURI = process.env.DB_CONNECTION_STRING;

mongoose
  .connect(myURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => console.log('Connected'))
  .catch(err => console.log(err));

const User = new Schema({
  providerId: String,
  userName: String,
  savedRecipes: [], 
  ingredients: [String], 
});

const ModelUser = mongoose.model('user', User);

module.exports = {
  ModelUser,
};
