import { Schema, model } from "mongoose";

const TeacherSchema = new Schema({
  name: String,
  age: Number,
  email: String,
  phone: String,
  address: String,
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

const Teacher = model("Teacher", TeacherSchema);

export { Teacher };
