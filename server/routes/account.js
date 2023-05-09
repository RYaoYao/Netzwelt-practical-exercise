import express, { Router } from "express"
import { SignIn } from "../controller/accountController";

const router = express.Router();

router.get("/SignIn", SignIn);
