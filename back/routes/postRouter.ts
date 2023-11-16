import { Router } from "express";
import { getPosts, newPost } from "../controller/postController";
import { body } from "express-validator";

const postRouter = Router();

postRouter.get("/posts", getPosts);
postRouter.post("/post", [body("title").isLength({ min: 5 })], newPost);

export default postRouter;
