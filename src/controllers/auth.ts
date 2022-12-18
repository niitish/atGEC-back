import { Request, Response } from "express";
import { User } from "../models";
import { compare } from "bcryptjs";

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user) {
    return res.status(404).json({ status: 404, message: "User not found" });
  }

  const isMatch = await compare(password, user.password);
  if (!isMatch) {
    return res
      .status(401)
      .json({ status: 401, message: "Invalid credentials" });
  }
};
