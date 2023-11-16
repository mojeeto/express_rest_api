import { createAction } from "@reduxjs/toolkit";
import { PostType } from "../../../src/components/postsList/model";

export const addAllPostsAction = createAction<PostType[]>("ADD_ALL_POSTS");
export const addPostAction = createAction<PostType>("ADD_POST");
export const destroyPostAction = createAction<PostType>("DESTROY_POST");
