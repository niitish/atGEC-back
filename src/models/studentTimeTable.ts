import { Schema, model, SchemaType } from "mongoose";

const StudentTimeTableSchema = new Schema({
    _id: {type: String},
    name: String,
    semester: {type: Number, min: 1, max: 8},
    branch: String,

    monday: [
        {
        subject: String,
        teacher: Schema.Types.ObjectId
        }
    ],
    tuesday: [
        {
        subject: String,
        teacher: Schema.Types.ObjectId
        }
    ],
    wednesday: [
        {
        subject: String,
        teacher: Schema.Types.ObjectId
        }
    ],
    thusday: [
        {
        subject: String,
        teacher: Schema.Types.ObjectId
        }
    ],
    friday: [
        {
        subject: String,
        teacher: Schema.Types.ObjectId
        }
    ],
    saturday: [
        {
        subject: String,
        teacher: Schema.Types.ObjectId
        }
    ]
})

const studentTimeTable = model("studentTimeTable", StudentTimeTableSchema)

export {studentTimeTable}


