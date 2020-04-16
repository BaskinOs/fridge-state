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
          type: types.RECEIVED_RECIPES,
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
