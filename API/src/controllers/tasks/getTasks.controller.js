import Task from "../../models/task.model.js";

export const getTasksController = async (id) => {
  const tasks = await Task.find({
    user: id,
  });
  if (tasks.length === 0) throw new Error("user has no tasks");

  return tasks;
};

export const getTaskController = async (id, userId) => {
  const task = await Task.findById(id).populate('user')
  if (!task) {
    throw new Error("Task not found");
  }

  if (task.user._id.toString() !== String(userId)) {
    throw new Error("Unauthorized access to task");
  }

  return task;
};
