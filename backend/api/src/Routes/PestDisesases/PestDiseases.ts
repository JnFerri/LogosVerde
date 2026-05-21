import { Router } from "express";
import controller from "../../Containers/PestDisesases";
import { validateBody, validateParamId } from "../../Middleware/ValidateZod";
import { PestDiseasesCreateSchema, PestDiseasesIdParamSchema, PestDiseasesUpdateSchema } from "../../Models/DTO/PestDisease";


const router = Router();

// Routes
router.get("/",  controller.getAll);
router.get("/:id",validateParamId(PestDiseasesIdParamSchema), controller.getById);
router.post("/",validateParamId(PestDiseasesCreateSchema), controller.create);
router.patch("/:id", validateParamId(PestDiseasesIdParamSchema),validateBody(PestDiseasesUpdateSchema), controller.update);
router.delete("/:id", validateParamId(PestDiseasesIdParamSchema), controller.delete);

export default router;
