import { NextFunction, Request, Response, Router } from "express";
import parserMiddleware from "./parserMiddleware";

export type MiddlewareType = (
  req: Request,
  res: Response,
  next: NextFunction
) => void;

const middleware = Router();
// General Middleware
middleware.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Header", "Content-Type, Authorization");
  next();
});

middleware.use(parserMiddleware);

export default middleware;
