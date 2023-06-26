import User from "../../models/user.model.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../../libs/jwt.js";

export const registerController = async (email, password, username) => {
  const user = await User.findOne({ email });

  if (user) throw new Error(["User already exists"]);

  if (!email || !password || !username) {
    throw new Error(["Missing required fields"]);
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = new User({
    username,
    email,
    password: hashPassword,
  });

  const savedUser = await newUser.save();

  const token = await createAccessToken({ id: savedUser._id });

  return {
    id: savedUser._id,
    create: savedUser.createdAt,
    update: savedUser.updatedAt,
    token,
  };
};
