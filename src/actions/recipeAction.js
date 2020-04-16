import axios from 'axios';
import * as types from '../constants/actionTypes';

export const getRecipesAction = () => (dispatch, getState) =>
  axios
    .get('/recipes/recipe')
    .then(({ data }) => {
      console.log(data, 'INSIDE ACTION');
    })
    .catch((err) =>
      dispatch({
        type: types.FAILED_RECIPES,
        payload: err
      })
    );

export const getInstructions = () => (dispatch, getState) =>
  axios
    .get('/recipes/instructions')
    .then(({ data }) => {
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
