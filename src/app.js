import express from "express";
import GroupRouter from "./components/groups/group.router.js";
import TeacherRouter from "./components/teachers/teacher.router.js";
import DisciplineRouter from "./components/disciplines/discipline.router.js";
import AudienceRouter from "./components/audience/audience.router.js";
import FacultyRouter from "./components/faculties/faculty.router.js";
import cors from "cors";

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

const API_URL = "/api";
app.use(API_URL, GroupRouter);
app.use(API_URL, TeacherRouter);
app.use(API_URL, DisciplineRouter);
app.use(API_URL, AudienceRouter);
app.use(API_URL, FacultyRouter);

export default app;
