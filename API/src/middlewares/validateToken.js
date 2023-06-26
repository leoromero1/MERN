import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config/config.js";

export const authRequired = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) return res.status(401).json({ message: "authorization denied" });

  jwt.verify(token, TOKEN_SECRET, (err, user) => {
    if (err) res.status(403).json({ message: "Invalid TOken" });

    req.user = user
 
  });

  next();
};
