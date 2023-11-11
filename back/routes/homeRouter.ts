import { Router } from "express";
import { getHome, postHome } from "../controller/homeController";

const homeRouter = Router();

homeRouter.get("/", getHome);
homeRouter.post("/", postHome);

export default homeRouter;
