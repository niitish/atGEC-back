import { Schema, model } from "mongoose";

const StudentSchema = new Schema({
  _id: Number,
  name: String,
  age: Number,
  email: String,
  phone: String,
  address: String,
  user: { type: Schema.Types.ObjectId, ref: "User" },
  branch: String,
  semester: Number
});

const Student = model("Student", StudentSchema);

export { Student };

