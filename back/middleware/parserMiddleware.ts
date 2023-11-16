import { Router } from "express";
import multer from "multer";
import bodyParser from "body-parser";

const parserMiddleware = Router();

parserMiddleware.use(bodyParser.json());
parserMiddleware.use(
  multer({
    fileFilter(req, file, callback) {
      const filteTypes = ["image/png", "image/jpg", "image/jpeg"];
      callback(null, filteTypes.includes(file.mimetype));
    },
    storage: multer.diskStorage({
      filename(req, file, callback) {
        callback(null, new Date().toISOString() + file.filename);
      },
      destination(req, file, callback) {
        callback(null, "images");
      },
    }),
  }).single("image")
);

export default parserMiddleware;
