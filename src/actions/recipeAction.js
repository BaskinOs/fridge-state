import axios from 'axios';
import * as types from '../constants/actionTypes';

export const getRecipes = () => (dispatch, getState) =>
  axios
    .get('/', {})
    .then(({ data }) => {
      console.log(data);
      dispatch({
        type: types.GET_RECIPES,
        payload: data
      });
    })
    .catch((err) => console.log(`ERR in getRecipes Action: ${err}`));

export const getInstructions = () => (dispatch, getState) =>
  axios
    .get('/', {})
    .then(({ data }) => {
      console.log(data);
      dispatch({
        type: types.GET_INSTRUCTIONS,
        payload: data
      });
    })
    .catch((err) => console.log(`ERR in getInstructions Action: ${err}`));

// recipeQuery() {
//   let apiString =
//     'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=';

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
