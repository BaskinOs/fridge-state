// import actionType constants
import axios from 'axios';
import * as types from '../constants/actionTypes';

export const postIngredient = () => (dispatch, getState) =>
  axios
    .post('/api/ingredients', {
      user_id: getState().user.userId,
      ingredient: getState().ingredient.ingredientInput
    })
    .then(({ data }) => {
      // if (!data.isLoggedIn) {
      //   dispatch({
      //     type: types.USER_LOGOUT,
      //     payload: data
      //   });
      // } else {
      console.log(data);
      dispatch({
        type: types.POST_INGREDIENT,
        payload: data
      });
      // }
    })
    .catch((err) => console.log(`ERR in postIngredient Action: ${err}`));

export const getIngredients = () => (dispatch, getState) =>
  axios
    .get('/api/ingredients', {
      user_id: getState().user.userId
    })
    .then(({ data }) => {
      if (!data.isLoggedIn) {
        dispatch({
          type: types.USER_LOGOUT,
          payload: data
        });
      } else {
        dispatch({
          type: types.GET_INGREDIENTS,
          payload: data
        });
      }
    })
    .catch((err) => console.log(`ERR in getIngredients Action: ${err}`));

export const deleteIngredient = () => (dispatch, getState) =>
  axios
    .delete('/api/ingredients', {
      user_id: getState().user.userId,
      ingredient
    })
    .then(({ data }) => {
      if (!data.isLoggedIn) {
        dispatch({
          type: types.USER_LOGOUT,
          payload: data
        });
      } else {
        dispatch({
          type: types.DELETE_INGREDIENTS,
          payload: data
        });
      }
    })
    .catch((err) => console.log(`ERR in deleteIngredient Action: ${err}`));

export const updateIngredient = (event) => ({
  type: types.UPDATE_INGREDIENT,
  payload: event.target.value
});
