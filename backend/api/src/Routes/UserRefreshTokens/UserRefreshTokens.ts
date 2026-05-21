import { Router } from "express";
import controller from "../../Containers/UserRefreshTokens";

const router = Router();

// validaçao cookie no controller
router.post("/refresh", controller.refresh);
router.post("/logout", controller.logout);

export default router;