import { Schema, model } from "mongoose";
import { UserType } from "../types/types";

const UserSchema = new Schema<UserType>({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true, enum: ["Admin", "Teacher", "Student"] },
});

const User = model("User", UserSchema);

export { User };
