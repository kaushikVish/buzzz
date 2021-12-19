import { combineReducers } from "redux";
import Auth from "./login";

const reducers = combineReducers({
  auth: Auth,
});

export default reducers;
