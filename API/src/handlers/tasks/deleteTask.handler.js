import { deleteTaskController } from "../../controllers/index.js";

export const deleteTaskHandler = async (req, res) =>{
  const {id} = req.params;
  const userId = req.user.id

  try {
    const response = await deleteTaskController(id, userId);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}