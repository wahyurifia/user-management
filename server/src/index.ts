import express, { Application, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { router } from "./user/user.controller";
import favicon from "serve-favicon";
import path from "path";

dotenv.config();
const PORT = process.env.PORT || 2000;

const app: Application = express();
app.use(cors());
app.use(express.json());

app.use("/users", router);
app.use(favicon(path.join(__dirname, "../public", "favicon.ico")));

app.listen(PORT, () => {
  console.log("server is running on port " + PORT);
});
