import { Router } from "express";
import controller from "../../Containers/Projects";

const router = Router();

// Routes
router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", controller.create);
router.patch("/:id", controller.update);
router.delete("/:id", controller.delete);

export default router;