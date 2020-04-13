import { combineReducers } from "redux";

// import all reducers here
import userReducer from "./userReducer";
import recipeReducer from "./recipeReducer";
import fridgeReducer from "./fridgeReducer";

// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  user: userReducer,
});

// make the combined reducers available for import
export default reducers;