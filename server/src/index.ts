import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { router } from "./user/user.controller";
import { createClient } from "@supabase/supabase-js";

dotenv.config();
const PORT = process.env.PORT;

const supabaseUrl: string = process.env.SUPABASE_URL!;
const supabaseKey: string = process.env.SUPABASE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

const app: Application = express();
app.use(cors());
app.use(express.json());

app.use("/users", router);

app.listen(PORT, () => {
  console.log("server is running on port " + PORT);
});
