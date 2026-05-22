import { Router } from "express";
import controller from "../../Containers/Projects";
import { validateBody, validateParamId } from "../../Middleware/ValidateZod";
import { ProjectCreateSchema, ProjectIdParamSchema, ProjectUpdateSchema } from "../../Schemas/Projects";

const router = Router();

// Routes
router.get("/", controller.getAll);
router.get("/:id",validateParamId(ProjectIdParamSchema), controller.getById);
router.post("/",validateBody(ProjectCreateSchema), controller.create);
router.patch("/:id",validateParamId(ProjectIdParamSchema),validateBody(ProjectUpdateSchema), controller.update);
router.delete("/:id",validateParamId(ProjectIdParamSchema), controller.delete);

export default router;