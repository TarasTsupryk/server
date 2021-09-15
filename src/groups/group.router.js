import Router from "express";
import GroupController from "./group.controller.js";

const router = new Router();
router.get("/groups", GroupController.getAll);
router.get("/groups/:id", GroupController.getOne);
router.post("/groups", GroupController.create);
router.put("/groups/:id", GroupController.update);
router.delete("/groups/:id", GroupController.delete);

export default router;
