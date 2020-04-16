import * as types from '../constants/actionTypes';

const recipeState = {
  recipesList: [], //recipes
  img: '',
  //video: stretch feature
  ingredient: 'tomatoe',
  nutrition: ''
};

const recipeReducer = (state = recipeState, action) => {
  console.log('Recipe Reducer Action', action.type);
  switch (action.type) {
    case types.ADD_RECIPE:
      return {
        ...state,
        recipes: action.payload
      };
    default:
      return state;

    case types.REQUEST_RECIPES:
      return {
        ...state,
        recipesList: action.payload
      };

    case types.FAILED_RECIPES:
      return {
        ...state,
        recipesList: action.payload
      };

    case types.RECEIVE_RECIPES:
      return {
        ...state,
        recipesList: action.payload
      };
  }
};

export default recipeReducer;
