import express from "express";
import path from "path";
import middleware from "./middleware";
import router from "./routes";
import mongoose from "mongoose";

const app = express();

app.use("/images", express.static(path.join(require.main!.path, "/images")));
app.use(middleware);
app.use(router);

mongoose
  .connect("mongodb://localhost:27017/express_api")
  .then((result) => {
    app.listen(8080);
  })
  .catch((err) => {
    throw new Error(err);
  });
