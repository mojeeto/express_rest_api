import { Router } from "express";
import { getHome } from "../controller/homeController";

const homeRouter = Router();

homeRouter.get("/post", getHome);

export default homeRouter;
