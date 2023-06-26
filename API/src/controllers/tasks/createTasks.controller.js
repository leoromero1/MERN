import Task from "../../models/task.model.js";
export const createTasksController = async (title, description, date, id) => {
  const newTask = new Task({
    title,
    description,
    date,
    user: id,
  });

  const savedTask = await newTask.save();
  return savedTask;
};
