import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { router } from "./user/user.controller";

dotenv.config();
const PORT = process.env.PORT;

const app: Application = express();
app.use(cors());
app.use(express.json());

app.use("/users", router);

app.listen(PORT, () => {
  console.log("server is running on port " + PORT);
});
