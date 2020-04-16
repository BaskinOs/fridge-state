import axios from 'axios';
import * as types from '../constants/actionTypes';

export const getRecipes = (string) => (dispatch, getState) =>
  axios
    .post('/fetchrecipes/recipe', {
      ingredients: string
    })
    .then(({ data }) => {
      console.log(data, 'GetRecipes');
      dispatch({
        type: types.RECEIVED_RECIPES,
        payload: data
      });
    })
    .catch((err) => console.log('error in ', err));

export const updateInstructions = (id) => (dispatch, getState) =>
  axios
    .post('/fetchrecipes/instructions', {
      recipe_id: id
    })
    .then(({ data }) => {
      console.log('INSTRUCTIONS', data.summary);
      dispatch({
        type: types.RECEIVED_INSTRUCTIONS,
        payload: data
      });
    })
    .catch((err) =>
      dispatch({
        type: types.FAILED_INSTRUCTIONS,
        payload: err
      })
    );

export const clearSummary = (event) => ({
  type: types.CLEAR_SUMMARY,
  payload: ''
});
