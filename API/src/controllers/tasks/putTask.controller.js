import Task from "../../models/task.model.js";
export const updateTasksController = async (id, userId, title, description) => {
  const taskUpdate = await Task.findByIdAndUpdate(
    id,
    { title, description },
    {
      new: true,
    }
  ).select("-user, -_id")

  if (!taskUpdate) throw new Error("TASK NOT FOUND (deleted)");
  if (taskUpdate.user.toString() !== String(userId))
    throw new Error("Unauthorized access to task");

  return taskUpdate;
};
