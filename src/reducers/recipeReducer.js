import * as types from '../constants/actionTypes';

const recipeState = {
  // recipesList includes an array of objects with keys recipeId, recipeName, and recipeImg
  recipesList: [], //recipes and images
  //video: stretch feature
  recipeStatus: '',
  instructionStatus: '',
  summary: '',
  summaryPicUrl: '',
  summaryTitle: '',
  nutrition: '',
  prepTime: '',
  diet: {},
  externalUrl: ''
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
      console.log('In Failed Recipes');
      return {
        ...state,
        recipeStatus: 'failed',
        error: action.payload
      };

    case types.RECEIVED_RECIPES:
      console.log(action.payload.data, 'Received Recipes');
      // add logic here to get recipeId, recipe img, and name
      // map the array of objects to reflect the new array of objects
      const recipes = action.payload.data.map((recipe) => {
        console.log(recipe.title);
        let obj = {
          id: recipe.id,
          name: recipe.title,
          picUrl: recipe.image
        };
        return obj;
      });
      console.log(recipes);
      return {
        ...state,
        recipeStatus: 'received',
        recipesList: recipes
      };

    case types.REQUEST_INSTRUCTIONS:
      return {
        ...state,
        instructionStatus: 'Waiting'
      };

    case types.FAILED_INSTRUCTIONS:
      console.log('In Failed Instructions');
      return {
        ...state,
        instructionStatus: 'Failed',
        error: action.payload
      };

    case types.RECEIVED_INSTRUCTIONS:
      console.log(action.payload.data.summary, 'Received instructions');
      const {
        summary,
        image,
        title,
        readyInMinutes,
        sourceUrl,
        vegetarian,
        vegan,
        glutenFree
      } = action.payload.data;

      const diet = {
        isVegetarian: vegetarian,
        isVegan: vegan,
        isGlutenFree: glutenFree
      };
      return {
        ...state,
        instructionStatus: 'Received',
        summary: summary,
        summaryPicUrl: image,
        summaryTitle: title,
        prepTime: readyInMinutes.toString().concat(' mins'),
        externalUrl: sourceUrl,
        diet: diet
      };

    case types.CLEAR_SUMMARY:
      return {
        ...state,
        summary: action.payload
      };
    default:
      return state;
  }
};

export default recipeReducer;
