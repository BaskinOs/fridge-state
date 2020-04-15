import * as types from '../constants/actionTypes';

const ingredientState = {
  ingredients: [],
  ingredientInput: ''
};

const ingredientReducer = (state = ingredientState, action) => {
  console.log('Action type', action.type);
  switch (action.type) {
    case types.GET_INGREDIENTS:
      console.log('inside REDUCER', action.payload);
      return {
        ...state,
        ingredients: action.payload
      };
    case types.POST_INGREDIENT:
      const newIngredient = {
        ingredientInput: state.ingredientInput,
        user_id: action.payload.user_id
      };

      let updatedIngredients = state.ingredients.slice();
      updatedIngredients.push(newIngredient);
      return {
        ...state,
        ingredients: updatedIngredients,
        ingredientInput: ''
      };
    case types.UPDATE_INGREDIENT:
      return { ...state, ingredientInput: action.payload };
    default:
      return state;
  }
};

export default ingredientReducer;
