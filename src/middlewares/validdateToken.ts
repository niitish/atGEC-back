import { verify } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { User } from "../models";
import { UserType } from "../types/types";

export const validateToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { authToken } = req.body;
  if (!authToken) {
    return res
      .status(401)
      .json({ status: 401, message: "Authtoken is required." });
  }

  try {
    const decoded = verify(authToken, process.env.JWT_SECRET!) as UserType;
    if (!decoded) {
      return res.status(401).json({ status: 403, message: "Invalid token." });
    }

    const user = await User.findOne({ username: decoded.username });
    if (!user) {
      return res.status(404).json({ status: 404, message: "User not found." });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ status: 401, error });
  }
};
