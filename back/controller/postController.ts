import fs from "fs";
import path from "path";
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

export const getPost: ControllerType = (req, res, next) => {
  const { postId } = req.params;
  Post.findById(postId)
    .then((post) => {
      if (!post) {
        const error = new Error("Post not found") as CustomError;
        error.status = 404;
        return next(error);
      }
      res.json({
        message: "Post founded!",
        post,
      });
    })
    .catch((err) => {
      const error = new Error(err) as CustomError;
      error.status = 500;
      next(error);
    });
};

export const newPost: ControllerType = (req, res, next) => {
  const { title, content } = req.body;
  const image = req.file;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error("Title must at least 2 character.") as CustomError;
    error.status = 422;
    return next(error);
  }
  if (!image) {
    const error = new Error("Image not exists!") as CustomError;
    error.status = 422;
    return next(error);
  }
  const newPost = new Post({
    title,
    content,
    imagePath: image.path,
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

export const updatePost: ControllerType = (req, res, next) => {
  const { postId } = req.params;
  const { title, content } = req.body;
  const image = req.file;

  Post.findById(postId)
    .then((post) => {
      if (!post) {
        const error = new Error("Post not found") as CustomError;
        error.status = 404;
        return next(error);
      }
      post.title = title;
      post.content = content;
      if (image) {
        clearImage(post.imagePath);
        post.imagePath = image.path;
      }
      post
        .save()
        .then((post) => {
          res.json({ message: "Product Updated", post });
        })
        .catch((err) => {
          next(err);
        });
    })
    .catch((err) => {
      next(err);
    });
};

const clearImage = (imagePath: string) => {
  fs.unlink(path.join(require.main!.path, imagePath), (err) => {
    if (!err) throw new Error("Error");
  });
};
