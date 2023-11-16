import { ControllerType } from ".";
import { validationResult } from "express-validator";

export const getPosts: ControllerType = (req, res, next) => {
  res.json([
    {
      _id: "1",
      title: "Post Title",
      content: "Post Content",
      imageUrl: "images/image-not-available.png",
      creator: {
        name: "Mojeeto",
      },
      date: new Date(),
    },
    {
      _id: "2",
      title: "Post Title 2",
      content: "Post Content 2",
      imageUrl: "images/image-not-available.png",
      creator: {
        name: "Mojeeto",
      },
      date: new Date(),
    },
  ]);
};

export const newPost: ControllerType = (req, res, next) => {
  const { title, content } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      message: "title must at least 2 character.",
    });
  }
  res.status(201).json({
    message: "Successful",
    data: {
      _id: "3",
      title,
      content,
      imageUrl: "images/image-not-available.png",
      creator: {
        name: "Mojeeto",
      },
      date: new Date(),
    },
  });
};
