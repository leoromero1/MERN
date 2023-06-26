import Task from "../../models/task.model.js";

export const deleteTaskController = async (id, userId) => {
  const task = await Task.findById(id);
  
  if (!task) {
    throw new Error("Task NOT found");
  }

  if (task.user.toString() !== String(userId)) {
    throw new Error("Unauthorized access to task");
  }

  const taskDeleted = await Task.findByIdAndDelete(id).select("-user, -_id");

  if (!taskDeleted) {
    throw new Error("Task not FOUND");
  }

  return taskDeleted;
};

