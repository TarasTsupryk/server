import express from "express";
import GroupRouter from "./components/groups/group.router.js";
import TeacherRouter from "./components/teachers/teacher.router.js";

const app = express();
app.use(express.json());
app.use("/", GroupRouter);
app.use("/", TeacherRouter);

export default app;
