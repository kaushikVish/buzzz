import { combineReducers } from "redux";
import Auth from "./login";
import Feed from './feed'

const reducers = combineReducers({
  auth: Auth,
  feed:Feed
});

export default reducers;
