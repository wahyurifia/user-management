import express, { Application, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./user/user.controller";

dotenv.config();
const app: Application = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 2150;

app.use("/users", router);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Welcome to my server api",
  });
});

app.listen(PORT, () => {
  console.log("server is running on port " + PORT);
});
