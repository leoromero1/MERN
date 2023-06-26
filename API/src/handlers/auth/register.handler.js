import { registerController } from "../../controllers/index.js";

export const registerHandler = async (req, res) => {
  const { email, password, username } = req.body;
  try {
    const registerData = await registerController(email, password, username);
    const { id, create, update, token } = registerData;
    res.cookie("token", token);
    res.status(200).json({ email, username, id, create, update });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
