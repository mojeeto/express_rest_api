import { createReducer } from "@reduxjs/toolkit";
import {
  addAllPostsAction,
  addPostAction,
  destroyPostAction,
} from "../action/postAction";
import { PostType } from "../../../src/components/postsList/model";

export const initialStatePostReducer = [] as PostType[];

export default createReducer(initialStatePostReducer, (builder) => {
  builder.addCase(addAllPostsAction, (state, action) => action.payload);
  builder.addCase(addPostAction, (state, action) => {
    console.log(action.payload);
    const indexOfPost = state.findIndex(
      (post) => post._id === action.payload._id
    );
    if (indexOfPost === -1) {
      return [...state, action.payload];
    }
    state[indexOfPost] = action.payload;
    return state;
  });
  builder.addCase(destroyPostAction, (state, action) => []);
});
