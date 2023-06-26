import { loginHandler } from "./auth/login.handler.js";
import { logoutHandler } from "./auth/logout.handler.js";
import { registerHandler } from "./auth/register.handler.js";
import { profileHandler } from "./auth/profile.Handler.js";
import { getTaskHandler, getTasksHandler } from "./tasks/getTasks.handler.js";
import { deleteTaskHandler } from "./tasks/deleteTask.handler.js";
import { updateTaskHandler } from "./tasks/putTask.handler.js";
import { createTasksHandler } from "./tasks/createTasks.handler.js";
import { verifyToken } from "./auth/verifyToken.handler.js";
export {
  loginHandler,
  registerHandler,
  logoutHandler,
  profileHandler,
  getTasksHandler,
  getTaskHandler,
  createTasksHandler,
  deleteTaskHandler,
  updateTaskHandler,
  verifyToken,
};
