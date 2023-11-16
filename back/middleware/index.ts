import { NextFunction, Request, Response, Router } from "express";
import parserMiddleware from "./parserMiddleware";
import cors from "cors";
import errorMiddleware from "./errorMiddleware";

export type MiddlewareType = (
  req: Request,
  res: Response,
  next: NextFunction
) => void;

const middleware = Router();
// General Middleware
middleware.use(cors());
middleware.use(errorMiddleware);

middleware.use(parserMiddleware);

export default middleware;
