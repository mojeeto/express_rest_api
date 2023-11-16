import { combineReducers, createReducer } from "@reduxjs/toolkit";
import postReducer from "./postReducer";

export default combineReducers({
  posts: postReducer,
});
