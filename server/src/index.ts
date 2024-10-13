import express, { Application, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { router } from "./user/user.controller";

dotenv.config();
const PORT = process.env.PORT || 2000;

const app: Application = express();
app.use(cors());
app.use(express.json());

app.use("/users", router);

app.listen(PORT, () => {
  console.log("server is running on port " + PORT);
});
