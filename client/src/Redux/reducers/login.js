import {
  LOGIN_WITH_GOOGLE,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  GET_USER_DETAILS,
  GET_USER_DETAILS_FAILED,
  GET_USER_DETAILS_SUCCESSFULLY,
  UPDATE_DETAILS,
  UPDATE_DETAILS_SUCCESSFULLY,
  UPDATE_DETAILS_FAILED,
} from "../constants/login";

const initState = {
  authLoading: false,
  message: "",
  showMessage: false,
  token: localStorage.getItem("AUTH_TOKEN"),
  user: {},
  redirect: "",
  allowRedirect: false,
  friends: [],
};

const auth = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_WITH_GOOGLE: {
      // console.log("reducresss comes");
      return {
        ...state,
        authLoading: true,
      };
    }
    case LOGIN_SUCCESS:
      // console.log("action payload",action.payload)
      return {
        ...state,
        message: "Login Successfull",
        token: action.payload.token,
        user: action.payload.newUser,
        authLoading: false,
        redirect: "/feed",
        allowRedirect: true,
      };

    case LOGIN_FAILED:
      // console.log("message", action.payload);
      return {
        ...state,
        authLoading: false,
        message: action.payload,
      };

    case GET_USER_DETAILS:
      return {
        ...state,
        authLoading: true,
      };

    case GET_USER_DETAILS_SUCCESSFULLY:
      return {
        ...state,
        authLoading: false,
        user: action.payload,
        friends: action.payload.friends,
      };

    case GET_USER_DETAILS_FAILED:
      return {
        ...state,
        authLoading: false,
      };

    case UPDATE_DETAILS:
      return {
        ...state,
        authLoading: true,
      };

    case UPDATE_DETAILS_SUCCESSFULLY:
      return {
        ...state,
        authLoading: false,
      };

    case UPDATE_DETAILS_FAILED:
      return {
        ...state,
        authLoading: false,
      };

    default:
      // console.log("default reducer", action.type);
      return state;
  }
};

export default auth;
