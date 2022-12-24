import {Router} from "express";
import {studentController} from "./../controllers/studentController"

const router = Router();

router.post("/addStudent", studentController);

