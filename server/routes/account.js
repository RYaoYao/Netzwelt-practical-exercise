import express, { Router } from "express"
import { SignIn } from "../controller/accountController.js";

const router = express.Router();

router.post("/SignIn", SignIn);

export default router