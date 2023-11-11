import { Router } from "express";
import { MiddlewareType } from ".";
import bodyParser from "body-parser";

const parserMiddleware = Router();

parserMiddleware.use(bodyParser.json());

export default parserMiddleware;
