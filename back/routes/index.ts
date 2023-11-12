import { Router } from "express";
import homeRouter from "./homeRouter";
import postRouter from "./postRouter";

const router = Router();

router.use(postRouter);
router.use(homeRouter);

export default router;
