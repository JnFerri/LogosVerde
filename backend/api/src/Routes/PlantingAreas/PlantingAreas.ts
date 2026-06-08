import { Router } from "express";
import controller from "../../Containers/PlantingAreas";
import { validateBody, validateParamId } from "../../Middleware/ValidateZod";
import { PlantingAreaCreateSchema, PlantingAreaIdParamSchema, PlantingAreaUpdateSchema } from "../../Schemas/PlantingAreas";
import { ProjectIdParamSchema } from "../../Schemas/Projects";

const router = Router();

// Routes
router.get("/", controller.getAll);
router.get("/:id", validateParamId(PlantingAreaIdParamSchema), controller.getById);
router.get("/project/:id" , validateParamId(ProjectIdParamSchema), controller.getAllByProjectId);
router.post("/", validateBody(PlantingAreaCreateSchema), controller.create);
router.patch("/:id", validateParamId(PlantingAreaIdParamSchema), validateBody(PlantingAreaUpdateSchema), controller.update);
router.delete("/:id", validateParamId(PlantingAreaIdParamSchema), controller.delete);

export default router;
