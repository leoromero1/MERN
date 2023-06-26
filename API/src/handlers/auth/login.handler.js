import { loginController } from "../../controllers/index.js";

export const loginHandler = async (req, res) => {
  const { email, password } = req.body;
  try {
    const token = await loginController(email, password);
    res.cookie('token', token)
    res.status(200).json({ message : 'usuario succesfull'});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
