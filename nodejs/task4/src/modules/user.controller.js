import { Router } from "express";
import {registerUser, loginUser} from "./user.service.js";
const router = Router();



router.post("/register", async (req, res) => {
    const user = await registerUser(req.body);
    return res.status(201).json({ message: "User registered successfully", user });
})

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const token = await loginUser(email, password);
    return res.status(200).json({ message: "User logged in successfully", token });
})

export default router;