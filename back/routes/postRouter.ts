import { Router } from "express";
import { getPosts, newPost } from "../controller/postController";

const postRouter = Router();

postRouter.get("/posts", getPosts);
postRouter.post("/post", newPost);

export default postRouter;
