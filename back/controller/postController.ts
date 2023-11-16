import { ControllerType } from ".";
import { validationResult } from "express-validator";
import Post from "../model/post";
import { CustomError } from "../middleware/errorMiddleware";

export const getPosts: ControllerType = (req, res, next) => {
  Post.find()
    .then((posts) => {
      res.json(posts);
    })
    .catch((err) => {
      return next(err);
    });
};

export const newPost: ControllerType = (req, res, next) => {
  const { title, content } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error("Title must at least 2 character.") as CustomError;
    error.status = 422;
    return next(error);
  }
  const newPost = new Post({
    title,
    content,
    imagePath: "Example image path",
    creator: {
      name: "Mojeeto",
    },
  });

  newPost
    .save()
    .then((data) => {
      res.status(201).json({
        message: "Successful",
        data,
      });
    })
    .catch((err) => {
      const error = new Error(err) as CustomError;
      error.status = 500;
      next(error);
    });
};
