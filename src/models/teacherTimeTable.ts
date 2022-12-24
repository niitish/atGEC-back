import { Schema, model, SchemaType } from "mongoose";

const TeacherTimeTableSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    monday: [
        {
        subject: String,
        semester: {type: Number, min: 1, max: 8},
        branch: String,
        }
    ],
    tuesday: [
        {
        subject: String,
        semester: {type: Number, min: 1, max: 8},
        branch: String,
        }
    ],
    wednesday: [
        {
        subject: String,
        semester: {type: Number, min: 1, max: 8},
        branch: String,
        }
    ],
    thusday: [
        {
        subject: String,
        semester: {type: Number, min: 1, max: 8},
        branch: String,
        }
    ],
    friday: [
        {
        subject: String,
        semester: {type: Number, min: 1, max: 8},
        branch: String,
        }
    ],
    saturday: [
        {
        subject: String,
        semester: {type: Number, min: 1, max: 8},
        branch: String,
        }
    ],
})

const teacherTimeTable = model("TeacherTimeTable", TeacherTimeTableSchema)

export {teacherTimeTable}

