import { ControllerType } from ".";

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
  ]);
};
