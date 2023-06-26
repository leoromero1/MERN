import {
  getTaskController,
  getTasksController,
} from "../../controllers/index.js";

export const getTasksHandler = async (req, res) => {
  const {id} = req.user
  console.log(req.user);

  try {
    const response = await getTasksController(id);

    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getTaskHandler = async (req, res) => {
  const {id} = req.params;
  const userId = req.user.id


  try {
    const response = await getTaskController(id, userId);

    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
