import { UserType, TokenType } from "./types/types";
import { sign } from "jsonwebtoken";

export const generateToken = (user: UserType, type: TokenType) => {
  user[type] = sign(
    {
      _id: user._id,
      username: user.username,
      role: user.role,
    },
    process.env.JWT_SECRET!,
    {
      expiresIn: type === "accessToken" ? "1h" : "1d",
    }
  );
};
