import { LOGIN_WITH_GOOGLE,LOGIN_FAILED,LOGIN_SUCCESS } from "../constants/login";

const initState = {
  loading: false,
  message: "",
  showMessage: false,
  token: "",
};

const auth = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_WITH_GOOGLE: {
      console.log("reducresss comes");
      return {
        ...state,
        loading: true,
        token: action.token,
      };
    }
    case LOGIN_SUCCESS:
      return{
        ...state,
        message:action.payload
      }

    case LOGIN_FAILED:
      console.log("message",action.payload)
      return{
        ...state,
        message:action.payload
      }
    default:
      console.log("default reducer",action.type)
      return state;
  }
};

export default auth;
