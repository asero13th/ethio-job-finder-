import { auth } from './firebase-config';

const initialState = {
  user: null,
};

export const actionTypes = {
  SET_USER: 'SET_USER',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export const setUser = (user) => (dispatch) => {
  if (user) {
    dispatch({
      type: actionTypes.SET_USER,
      user,
    });
  } else {
    dispatch({
      type: actionTypes.SET_USER,
      user: null,
    });
  }
};