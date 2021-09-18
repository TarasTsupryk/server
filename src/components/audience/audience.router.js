import Router from "express";
import AudienceController from "./audience.controller.js";

const AudienceRouter = new Router();
AudienceRouter.get("/audience", AudienceController.getAll);
AudienceRouter.get("/audience/:id", AudienceController.getOne);
AudienceRouter.post("/audience", AudienceController.create);
AudienceRouter.put("/audience/:id", AudienceController.update);
AudienceRouter.delete("/audience/:id", AudienceController.delete);

export default AudienceRouter;
