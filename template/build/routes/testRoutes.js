import express from "express";
import { testController } from "../controllers/testController.js";
const app = express.Router();
app.get("/test", testController);
export default app;
