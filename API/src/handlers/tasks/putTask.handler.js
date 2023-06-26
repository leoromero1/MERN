import { updateTasksController } from "../../controllers/tasks/putTask.controller.js";

export const updateTaskHandler = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;
  const { title, description } = req.body;
  try {
    const response = await updateTasksController(
      id,
      userId,
      title,
      description
    );
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
