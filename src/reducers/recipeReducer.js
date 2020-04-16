import * as types from '../constants/actionTypes';

const recipeState = {
  recipesList: [], //recipes
  img: '',
  //video: stretch feature
  ingredient: 'tomatoe',
  recipeStatus: '',
  instructionStatus: '',
  instructions: '',
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

    case types.REQUEST_RECIPES:
      return {
        ...state,
        recipeStatus: 'Waiting'
      };

    case types.FAILED_RECIPES:
      return {
        ...state,
        recipeStatus: 'failed',
        error: action.payload
      };

    case types.RECEIVED_RECIPES:
      console.log(action.payload, 'payload');
      return {
        ...state,
        recipeStatus: 'received',
        recipesList: [...action.payload]
      };

    case types.REQUEST_INSTRUCTIONS:
      return {
        ...state,
        instructionStatus: 'Waiting'
      };

    case types.FAILED_INSTRUCTIONS:
      return {
        ...state,
        instructionStatus: 'Failed',
        error: action.payload
      };

    case types.RECEIVED_INSTRUCTIONS:
      console.log(action.payload, 'instructions');
      return {
        ...state,
        instructionStatus: 'Received',
        instructions: [...action.payload]
      };
    default:
      return state;
  }
};

export default recipeReducer;
