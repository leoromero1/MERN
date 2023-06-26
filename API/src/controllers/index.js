import { loginController } from "./auth/login.controller.js";
import { registerController } from "./auth/register.controller.js";
import { profileController } from "./auth/profile.controller.js";
import {
  getTasksController,
  getTaskController,
} from "./tasks/getTasks.controller.js";
import { createTasksController } from "./tasks/createTasks.controller.js";
import { deleteTaskController } from "./tasks/deleteTask.controller.js";
import { updateTasksController } from "./tasks/putTask.controller.js";
import { verifyController } from "./auth/verifyToken.controller.js";

export {
  registerController,
  loginController,
  profileController,
  getTasksController,
  getTaskController,
  createTasksController,
  deleteTaskController,
  updateTasksController,
  verifyController,
};
