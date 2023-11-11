import express from "express";
import middleware from "./middleware";
import router from "./routes";

const app = express();

app.use(middleware);
app.use(router);

app.listen(8080);
