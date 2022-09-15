import { combineReducers } from "redux";
import { loginReducer, postReducer } from "./loginReducers";

// const reducers = combineReducers({ login: loginReducer,posts: postReducer });
const reducers = combineReducers({
  login: loginReducer,
  posts: postReducer,
});
export default reducers;
