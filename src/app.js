import express from "express";
import GroupRouter from "./components/groups/group.router.js";
import TeacherRouter from "./components/teachers/teacher.router.js";
import DisciplineRouter from "./components/disciplines/discipline.router.js";

const app = express();
app.use(express.json());

const API_URL = "/api";
app.use(API_URL, GroupRouter);
app.use(API_URL, TeacherRouter);
app.use(API_URL, DisciplineRouter);

export default app;
