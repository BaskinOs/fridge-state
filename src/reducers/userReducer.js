import * as types from '../constants/actionTypes';

const userState = {
  isLoggedIn: false,
  newUser: true,
  userId: '',
  userName: ''
};

const userReducer = (state = userState, action) => {
  switch (action.type) {
    case types.USER_LOGIN:
      return {
        ...state,
        isLoggedIn: true
      };

    case types.USER_LOGOUT:
      return {
        userId: '',
        userName: '',
        isLoggedIn: false
      };

    case types.GET_USER:
      return {
        ...state,
        userId: action.payload._id,
        userName: action.payload.name
      };

    default:
      return state;
  }
};

export default userReducer;
