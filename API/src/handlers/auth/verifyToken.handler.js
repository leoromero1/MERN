
export const verifyToken = async (req, res) => {
  const { token } = req.cookie;
  try {
    const response = await verifyController(token);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};