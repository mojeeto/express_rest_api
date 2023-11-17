import { Router } from "express";
import {
  getPosts,
  getPost,
  newPost,
  updatePost,
} from "../controller/postController";
import { body } from "express-validator";

const postRouter = Router();

postRouter.get("/posts", getPosts);
postRouter.post("/post", [body("title").isLength({ min: 5 })], newPost);
postRouter.get("/post/:postId", getPost);
postRouter.put("/post/:postId", updatePost);

export default postRouter;
