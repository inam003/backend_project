import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";

const router = Router();

router.route("/register").post(registerUser);
// Url looks like: http://localhost:5000/api/v1/users/register
// Url looks like: http://localhost:5000/api/v1/users/login

export default router;
