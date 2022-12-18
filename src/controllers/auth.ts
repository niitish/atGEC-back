import { Request, Response } from "express";
import { User } from "../models";
import { compare } from "bcryptjs";

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user) {
    return res.status(404).json({ status: 404, message: "User not found." });
  }

  const isMatch = user.firstTime
    ? user.password === password
    : await compare(password, user.password);

  if (!isMatch) {
    return res
      .status(401)
      .json({ status: 401, message: "Invalid credentials." });
  }

  user.generateToken(user, "accessToken");
  await user.save();

  const { password: pass, ...rest } = user.toObject();
  return res.status(200).json({
    status: 200,
    message: "Login successful.",
    data: rest,
  });
};
