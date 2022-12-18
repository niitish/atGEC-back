import { Schema, model } from "mongoose";

const StudentSchema = new Schema({
  name: String,
  age: Number,
  email: String,
  phone: String,
  address: String,
  user: { type: Schema.Types.ObjectId, ref: "User" },
  branch: { type: Schema.Types.ObjectId, ref: "Branch" },
  semester: { type: Schema.Types.ObjectId, ref: "Semester" },
});

const Student = model("Student", StudentSchema);

export { Student };
