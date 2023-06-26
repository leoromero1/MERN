import Jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../../config/config.js";
import User from "../../models/user.model.js";

export const verifyController = async (token) => {
  if (!token) {
    throw new Error("Unahuthorized 1");
  }

  Jwt.verify(token, TOKEN_SECRET, async (err, user) => {
    if (err) {
      throw new Error("Unahuthorized 2");
    }
    const userFound = await User.findById(user.id);
    console.log(userFound);
    if (!userFound) throw new Error("Unahuthorized 3");

    return {
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
    };
  });
};
