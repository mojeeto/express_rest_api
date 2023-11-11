import { Router } from "express";
import { MiddlewareType } from ".";
import bodyParser from "body-parser";

const parserMiddleware = Router();

parserMiddleware.use(bodyParser.urlencoded({ extended: false }));

export default parserMiddleware;
