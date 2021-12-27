import {
  LOGIN_WITH_GOOGLE,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  GET_USER_DETAILS,
  GET_USER_DETAILS_FAILED,
  GET_USER_DETAILS_SUCCESSFULLY,
} from "../constants/login";

const initState = {
  loading: false,
  message: "",
  showMessage: false,
  token: localStorage.getItem("AUTH_TOKEN"),
  user: {},
  redirect: "",
  allowRedirect: false,
};

const auth = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_WITH_GOOGLE: {
      // console.log("reducresss comes");
      return {
        ...state,
        loading: true,
      };
    }
    case LOGIN_SUCCESS:
      // console.log("action payload",action.payload)
      return {
        ...state,
        message: "Login Successfull",
        token: action.payload.token,
        user: action.payload.newUser,
        loading: false,
        redirect: "/feed",
        allowRedirect: true,
      };

    case LOGIN_FAILED:
      // console.log("message", action.payload);
      return {
        ...state,
        loading: false,
        message: action.payload,
      };

    case GET_USER_DETAILS:
      return {
        ...state,
        loading: true,
      };

    case GET_USER_DETAILS_SUCCESSFULLY:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };

    case GET_USER_DETAILS_FAILED:
      return {
        ...state,
        loading: false,
      };
    default:
      // console.log("default reducer", action.type);
      return state;
  }
};

export default auth;
