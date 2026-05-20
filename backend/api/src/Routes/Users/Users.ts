import { Router } from "express";
import controller from "../../Containers/Users";

const router = Router();

// User authentication routes
router.post("/login", controller.login);

// User management routes
router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", controller.create);
router.patch("/:id", controller.update);
router.patch("/inactive/:id", controller.inactive); // Assuming inactive is a PATCH operation

export default router;