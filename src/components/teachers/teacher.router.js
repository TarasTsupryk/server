import Router from "express";
import TeacherController from "./teacher.controller.js";

const TeacherRouter = new Router();
TeacherRouter.get("/teachers", TeacherController.getAll);
TeacherRouter.get("/teachers/:id", TeacherController.getOne);
TeacherRouter.post("/teachers", TeacherController.create);
TeacherRouter.put("/teachers/:id", TeacherController.update);
TeacherRouter.delete("/teachers/:id", TeacherController.delete);

export default TeacherRouter;
