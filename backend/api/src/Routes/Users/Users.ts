import { Router } from "express";
import controller from "../../Containers/Users";
import { validateBody, validateParamId } from "../../Middleware/ValidateZod";
import { UserCreateSchema, UserIdParamSchema, UserLoginSchema, UserUpdateSchema } from "../../Models/DTO/User";

const router = Router();


router.post("/login",validateBody(UserLoginSchema), controller.login);


router.get("/", controller.getAll);
router.get("/:id", validateParamId(UserIdParamSchema), controller.getById);
router.post("/", validateBody(UserCreateSchema),controller.create);
router.patch("/:id", validateParamId(UserIdParamSchema), validateBody(UserUpdateSchema),controller.update);
router.patch("/inactive/:id", controller.inactive); 

export default router;