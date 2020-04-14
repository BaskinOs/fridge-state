import * as types from '../constants/actionTypes';

const recipeState = {
  recipes: [], //recipes
  img: '',
  //video: stretch feature
  nutrition: ''
};

const recipeReducer = (state = recipeState, action) => {
  switch (action.type) {
    case types.ADD_RECIPE:
      return {
        ...state,
        recipes: action.payload
      };
    default:
      return state;
  }
};

export default recipeReducer;
