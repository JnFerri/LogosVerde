import { Router } from "express";
import controller from "../../Containers/Plants";
import { validateBody, validateParamId } from "../../Middleware/ValidateZod";
import { CreatePlantSchema, PlantIdParamSchema, UpdatePlantSchema } from "../../Models/DTO/Plants";

const router = Router();

// Routes
router.get("/", controller.getAll);
router.get("/:id",validateParamId(PlantIdParamSchema), controller.getById);
router.post("/",validateBody(CreatePlantSchema), controller.create);
router.patch("/:id",validateParamId(PlantIdParamSchema),validateBody(UpdatePlantSchema), controller.update);
router.delete("/:id", validateParamId(PlantIdParamSchema), controller.delete);

export default router;