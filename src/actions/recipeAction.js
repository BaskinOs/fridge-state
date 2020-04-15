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
