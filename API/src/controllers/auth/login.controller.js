import User from "../../models/user.model.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../../libs/jwt.js";

export const loginController = async (email, password) => {
  const user = await User.findOne({email})
  if (!user) throw new Error("User not Found");
  
  const isMatchPassword = await bcrypt.compare(password, user.password) 
  
  if(!isMatchPassword) throw new Error("Incorrect password")
  
  const token = await createAccessToken({id: user._id})
  return token
}