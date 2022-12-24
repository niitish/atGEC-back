import {Router} from "express";
import {teacherController} from "./../controllers/teacherController"

const router = Router();

router.post("/addTeacher", teacherController);
