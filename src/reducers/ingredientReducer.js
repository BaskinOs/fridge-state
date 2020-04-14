import * as types from '../constants/actionTypes';

const ingredientState = {
  ingredient: [],
  ingredientInput: ''
};

const ingredientReducer = (state = ingredientState, action) => {
  switch (action.type) {
    case types.ADD_INGREDIENT:
      return {
        ingredient: action.payload
      };

    default:
      return state;
  }
};

export default ingredientReducer;
