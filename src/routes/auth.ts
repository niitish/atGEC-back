import { Router } from "express";
import { login } from "../controllers/";
import { validateToken } from "../middlewares/validdateToken";

const router = Router();

router.post("/login", login);

export default router;
