import { Router } from "express";
import homeRouter from "./homeRouter";

const router = Router();

router.use(homeRouter);

export default router;
