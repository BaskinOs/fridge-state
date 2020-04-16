import * as types from '../constants/actionTypes';

const userState = {
  isLoggedIn: false,
  // newUser: true,
  userId: '',
  userName: '',
  profilePic: '',
  ingredients: [],
  savedRecipes: []
};

const userReducer = (state = userState, action) => {
  switch (action.type) {
    case types.USER_LOGIN:
      console.log('userReducer USER_LOGIN action.payload', action.payload);
      return {
        userId: action.payload.user._id,
        userName: action.payload.user.userName,
        profilePic: action.payload.user.picURL,
        ingredients: [...action.payload.user.ingredients],
        savedRecipes: [...action.payload.user.savedRecipes],
        isLoggedIn: true
      };

    case types.USER_LOGOUT:
      console.log('userReducer USER_LOGOUT');
      return {
        userId: '',
        userName: '',
        profilePic: '',
        ingredients: [],
        savedRecipes: [],
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
