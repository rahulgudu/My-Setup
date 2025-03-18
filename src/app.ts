import express, { Request, Response } from "express";
import { config } from "dotenv";
import { connectDB } from "./libs/dbConnect.js";
import chalk from "chalk";
import routes from "./routes/index.js";
config({
  path: "./.env.local",
});
const uri = process.env.MONGO_URI || "";
connectDB(uri);

const port = 8080;
const app = express();

app.use("/", routes);

app.listen(port, () => {
  console.log(
    chalk.magentaBright(`Server is running on port http://localhost:${port}`)
  );
});
