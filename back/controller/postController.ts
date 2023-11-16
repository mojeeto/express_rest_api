import { ControllerType } from ".";
import { validationResult } from "express-validator";
import Post from "../model/post";

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
    return res.status(422).json({
      message: "title must at least 2 character.",
    });
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
    .catch((err) => next(err));
};
