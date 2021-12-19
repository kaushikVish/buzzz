import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGIN_WITH_GOOGLE,
} from "../constants/login";

export const loginWithGoogle = (user) => {
  console.log("comes in action",user)
  return {
    type: LOGIN_WITH_GOOGLE,
    payload: user,
  };
};

export const loginSuccess = (data) => {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
};

export const loginFailed = (data) => {
  return {
    type: LOGIN_FAILED,
    payload: data,
  };
};
