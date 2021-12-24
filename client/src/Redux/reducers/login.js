import {
  LOGIN_WITH_GOOGLE,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
} from "../constants/login";

const initState = {
  loading: false,
  message: "",
  showMessage: false,
  token: localStorage.getItem("AUTH_TOKEN"),
  user: {},
  redirect:"",
  allowRedirect:false
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
        redirect:'/feed',
        allowRedirect:true
      };

    case LOGIN_FAILED:
      // console.log("message", action.payload);
      return {
        ...state,
        loading: false,
        message: action.payload,
      };
    default:
      // console.log("default reducer", action.type);
      return state;
  }
};

export default auth;
