import express from "express";
import testRoutes from "./testRoutes.js";
const app = express.Router();
app.use("/test", testRoutes);
export default app;
