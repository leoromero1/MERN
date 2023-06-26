import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  getTaskHandler,
  getTasksHandler,
  createTasksHandler,
  deleteTaskHandler,
  updateTaskHandler,
} from "../handlers/index.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { taskSchema } from "../schemas/task.schema.js";
const router = Router();

router.get("/tasks", authRequired, getTasksHandler);
router.get("/task/:id", authRequired, getTaskHandler);
router.post("/task", authRequired, validateSchema(taskSchema) ,createTasksHandler);
router.delete("/task/:id", authRequired, deleteTaskHandler);
router.put("/task/:id", authRequired, validateSchema(taskSchema), updateTaskHandler);

export default router;
