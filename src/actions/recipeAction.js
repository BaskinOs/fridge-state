import axios from 'axios';
import * as types from '../constants/actionTypes';

export function getRecipesAction(dispatch, getState) {
  // const { ingredient } = getState().ingredient;
  return function (dispatch) {
    dispatch({
      type: types.REQUEST_RECIPES,
      payload: 'Placeholder'
    });

    fetch(
      'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=1&ranking=1&ignorePantry=true&ingredients=apples,flour,sugar',
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host':
            'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
          'x-rapidapi-key': '573c26c799msh27b6667d63bc248p16cd7bjsnb8a840afd3f5'
        }
      }
    )
      .then((res) => res.json())
      .then((data) =>
        dispatch({
          type: types.RECEIVE_RECIPES,
          payload: data
        })
      )
      .catch((err) =>
        dispatch({
          type: types.FAILED_RECIPES,
          payload: err
        })
      );
  };
}

export function getInstructions(dispatch, getState) {
  return function (dispatch) {
    dispatch({
      type: types.REQUEST_INSTRUCTIONS,
      payload: 'placeholder'
    });

    fetch(
      'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/48191/information',
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host':
            'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
          'x-rapidapi-key': '573c26c799msh27b6667d63bc248p16cd7bjsnb8a840afd3f5'
        }
      }
    )
      .then((res) => res.json())
      .then((data) =>
        dispatch({
          type: types.RECEIVED_INSTRUCTIONS,
          payload: data
        })
      )
      .catch((err) =>
        dispatch({
          type: types.FAILED_INSTRUCTIONS,
          payload: err
        })
      );
  };
}

// recipeQuery() {
//   let apiString =
//     'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=5&ranking=1&ignorePantry=false&ingredients=apples,flour,sugar';

//   apiString += `${numOfRecipe}`;
//   apiString += `&ranking=1&ignorePantry=false&ingredients=`;

//   if (ingredOne.length > 0) {
//     apiString += `${ingredOne}`;
//   }
//   if (ingredTwo.length > 0) {
//     apiString += `,${ingredTwo}`;
//   }
//   if (ingredThree.length > 0) {
//     apiString += `,${ingredThree}`;
//   }
//   if (ingredFour.length > 0) {
//     apiString += `,${ingredFour}`;
//   }
//   if (ingredFive.length > 0) {
//     apiString += `,${ingredFive}`;
//   }

//   const recipeOptions = {
//     url: apiString,
//     method: 'GET',
//     headers: {
//       'x-rapidapi-host':
//         'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
//       'x-rapidapi-key': process.env.API_APP_KEY
//     }
//   };

//   axios(recipeOptions)
//     .then((response) => {
//       console.log(response, 'this is the response');
//     })
//     .catch((err) =>
//       console.log(`Error in recipe options fetch: ERR: ${err}`)
//     );
// }

/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

// instructionQuery(e) {
//   let apiString = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/`;

//   apiString += `${recipe_id}/`;
//   apiString += `information`;

//   const instrOptions = {
//     url: apiString,
//     method: 'GET',
//     headers: {
//       'x-rapidapi-host':
//         'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
//       'x-rapidapi-key': process.env.API_APP_KEY
//     }
//   };

//   axios(instrOptions)
//     .then((response) => {
//       console.log(response, 'this is response');
//     })
//     .catch((err) => console.log(`Error in instruction fetch: ERR: ${err}`));
// }
