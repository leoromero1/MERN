import { loginController } from "../../controllers/index.js";

export const loginHandler = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userData = await loginController(email, password);
    res.cookie("token", userData.token);
    res.status(200).json(userData.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
