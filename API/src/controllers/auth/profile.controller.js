import User from "../../models/user.model.js";

export const profileController = async (userId) => {
  const userFound = await User.findById(userId).select("-password");

  if (!userFound) throw new Error("User not Found(Profile)");

  return userFound;
};
