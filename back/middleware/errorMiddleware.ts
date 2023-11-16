import { NextFunction, Request, Response, Router } from "express";

export interface CustomError extends Error {
  status: number;
}

const errorMiddleware = Router();

errorMiddleware.use(
  (err: CustomError, req: Request, res: Response, next: NextFunction) => {
    res.status(err.status).json({ status: err.status, message: err.message });
  }
);

export default errorMiddleware;
