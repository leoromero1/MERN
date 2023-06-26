import { createTasksController } from "../../controllers/index.js";

export const createTasksHandler = async (req, res) => {
  const { title, description, date } = req.body;
  const id = req.user.id
  try {
    const response = await createTasksController(title, description, date, id);

    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
