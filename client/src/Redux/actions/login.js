import {
  GET_USER_DETAILS,
  GET_USER_DETAILS_FAILED,
  GET_USER_DETAILS_SUCCESSFULLY,
  UPDATE_DETAILS,
  UPDATE_DETAILS_FAILED,
  UPDATE_DETAILS_SUCCESSFULLY,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGIN_WITH_GOOGLE,
} from "../constants/login";

export const loginWithGoogle = (user) => {
  console.log("comes in action", user);
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

export const getUserDetails = () => {
  return {
    type: GET_USER_DETAILS,
  };
};

export const getUserDetailsSuccessfully = (data) => {
  return {
    type: GET_USER_DETAILS_SUCCESSFULLY,
    payload: data,
  };
};

export const getUserDetailsFailed = (message) => {
  return {
    type: GET_USER_DETAILS_FAILED,
    payload: message,
  };
};

export const saveUpdateDetails = (data) => {
  console.log("action ==> ", data);
  return {
    type: UPDATE_DETAILS,
    payload: data,
  };
};

export const saveUpdateDetailsSuccessfully = () => {
  return {
    type: UPDATE_DETAILS_SUCCESSFULLY,
  };
};

export const saveUpdateDetailsFailed = () => {
  return {
    type: UPDATE_DETAILS_FAILED,
  };
};
