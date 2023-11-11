import { NextFunction, Request, Response, Router } from "express";
import parserMiddleware from "./parserMiddleware";

export type MiddlewareType = (
  req: Request,
  res: Response,
  next: NextFunction
) => void;

const middleware = Router();

middleware.use(parserMiddleware);

export default middleware;
