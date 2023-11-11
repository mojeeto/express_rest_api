import { ControllerType } from ".";

export const getHome: ControllerType = (req, res, next) => {
  res.json({
    message: "This is Home Page",
  });
};

export const postHome: ControllerType = (req, res, next) => {
  const { message } = req.body;

  res.json({
    message: `you send me this message: ${message}`,
  });
};
