import { Router } from "express";
import { getPosts } from "../controller/postController";

const postRouter = Router();

postRouter.get("/posts", getPosts);

export default postRouter;
