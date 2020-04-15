// import actionType constants
import axios from 'axios';
import * as types from '../constants/actionTypes';

export const verifyLogin = () => (dispatch) =>
  axios
    .get("/auth/verify")
    .then(({ data }) => {
      console.log('userActions verifyLogin data.isLoggedIn', data.isLoggedIn);
      if (!data.isLoggedIn) {
        console.log('userActions verifyLogin USER_LOGOUT dispatched');
        return dispatch({
          type: types.USER_LOGOUT,
          payload: data
        });
      } else {
        console.log('userActions verifyLogin USER_LOGIN dispatched');
        return dispatch({
          type: types.USER_LOGIN,
          payload: data
        });
      }
    })
    .catch((err) => console.log(err));

export const getUser = () => (dispatch) =>
  axios.get('/api/user').then(({ data }) => {
    if (!data.isLoggedIn) {
      dispatch({
        type: types.USER_LOGOUT,
        payload: data
      });
    } else {
      dispatch({
        type: types.GET_USER,
        payload: data.user
      });
    }
  });
