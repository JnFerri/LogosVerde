import { Router } from "express";
import controller from "../../Containers/PlantTypes";
import { PlantTypesIdParamSchema } from "../../Schemas/PlantTypes";
import { validateParamId } from "../../Middleware/ValidateZod";

const router = Router();

router.get("/", controller.getAll);
router.get("/:id", validateParamId(PlantTypesIdParamSchema), controller.getById);

export default router;
