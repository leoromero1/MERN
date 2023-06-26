import { Router } from "express";
import {
  loginHandler,
  registerHandler,
  logoutHandler,
  profileHandler,
  verifyToken
} from "../handlers/index.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { registerSchema, loginSchema } from "../schemas/auth.schema.js";

const router = Router();

router.post("/register", validateSchema(registerSchema), registerHandler);
router.post("/login", validateSchema(loginSchema), loginHandler);
router.post("/logout", logoutHandler);
router.get("/verify", verifyToken);
router.get("/profile", authRequired, profileHandler);


export default router;
