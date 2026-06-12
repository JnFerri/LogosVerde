import { Router } from "express";
import controller from "../../Containers/UnitMeasurement";
import { validateParamId } from "../../Middleware/ValidateZod";
import { UnitMeasurementIdParamSchema } from "../../Schemas/UnitMesurement";

const router = Router();

router.get("/", controller.getAll);
router.get("/:id", validateParamId(UnitMeasurementIdParamSchema), controller.getById);

export default router;
