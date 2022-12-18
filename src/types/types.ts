import { Types } from "mongoose";

export interface UserType {
  _id: Types.ObjectId;
  username: string;
  password: string;
  role: string;
  accessToken: string;
  refreshToken: string;
  firstTime: boolean;
}

export interface UserDocument extends UserType {
  generateToken: (user: UserType, type: TokenType) => void;
}

export type TokenType = "accessToken" | "refreshToken";
