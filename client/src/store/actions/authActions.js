import axios from 'axios'
import js_cookie from 'js-cookie'
import * as actions from './index'

export const loginUser = loginData => async dispatch => {
  try {
    const res = await axios.post("/api/users/login", loginData);
    dispatch({ type: actions.SET_USER, user: res.data.user });
  } catch(e){
    dispatch({ type: actions.ERROR, error: e.response.data })
  }
};

export const registerUser = registerData => async dispatch => {
  try {
    const res = await axios.post("/api/users/register", registerData);
    dispatch({ type: actions.SET_USER, user: res.data.user });
  } catch(e){
    dispatch({ type: actions.ERROR, error: e.response.data })
  }
};

export const logoutUser = () => {
  js_cookie.remove("jwt")
  return {
    type: actions.LOGOUT_USER
  };
};

export const setCurrentUser = user => ({
  type: actions.SET_USER,
  user
});
