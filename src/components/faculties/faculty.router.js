import Router from "express";
import FacultyController from "./faculty.controller.js";

const FacultyRouter = new Router();
FacultyRouter.get("/faculties", FacultyController.getAll);
FacultyRouter.get("/faculties/:id", FacultyController.getOne);
FacultyRouter.post("/faculties", FacultyController.create);
FacultyRouter.put("/faculties/:id", FacultyController.update);
FacultyRouter.delete("/faculties/:id", FacultyController.delete);

export default FacultyRouter;
