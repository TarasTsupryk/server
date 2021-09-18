import Router from "express";
import GroupController from "./group.controller.js";

const GroupRouter = new Router();
GroupRouter.get("/groups", GroupController.getAll);
GroupRouter.get("/groups/:id", GroupController.getOne);
GroupRouter.post("/groups", GroupController.create);
GroupRouter.put("/groups/:id", GroupController.update);
GroupRouter.delete("/groups/:id", GroupController.delete);

export default GroupRouter;
