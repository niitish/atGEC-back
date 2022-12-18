import { Schema, model } from "mongoose";
import { UserDocument, UserType } from "../types/types";
import { generateToken } from "../helpers";

const UserSchema = new Schema<UserDocument, UserType>({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true, enum: ["Admin", "Teacher", "Student"] },
  accessToken: String,
  refreshToken: String,
  firstTime: { type: Boolean, default: true },
});

UserSchema.methods.generateToken = generateToken;

const User = model("User", UserSchema);

export { User };
