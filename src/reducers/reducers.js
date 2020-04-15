import { combineReducers } from 'redux';

// import all reducers here
import userReducer from './userReducer';
import recipeReducer from './recipeReducer';
import ingredientReducer from './ingredientReducer';

// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  user: userReducer,
  ingredient: ingredientReducer,
  recipe: recipeReducer
});

// make the combined reducers available for import
export default reducers;
