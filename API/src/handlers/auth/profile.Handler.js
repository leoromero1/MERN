import { profileController } from "../../controllers/index.js";

export const profileHandler = async (req, res) => {
  const userId = req.user.id;
  try {
    const response = await profileController(userId);

    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
