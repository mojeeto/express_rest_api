import { combineReducers } from "@reduxjs/toolkit";
import postReducer from "./postReducer";
import alertReducer from "./alertReducer";

export default combineReducers({
  posts: postReducer,
  alerts: alertReducer,
});
