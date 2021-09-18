import express from "express";
import router from "../src/groups/group.router.js";
import TeacherRouter from "./teachers/teacher.router.js";

const app = express();
app.use(express.json());
app.use("/", router);
app.use("/", TeacherRouter);

export default app;
