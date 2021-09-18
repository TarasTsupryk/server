import Router from "express";
import DisciplineController from "./discipline.controller.js";

const DisciplineRouter = new Router();
DisciplineRouter.get("/disciplines", DisciplineController.getAll);
DisciplineRouter.get("/disciplines/:id", DisciplineController.getOne);
DisciplineRouter.post("/disciplines", DisciplineController.create);
DisciplineRouter.put("/disciplines/:id", DisciplineController.update);
DisciplineRouter.delete("/disciplines/:id", DisciplineController.delete);

export default DisciplineRouter;
