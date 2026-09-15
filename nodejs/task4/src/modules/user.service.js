import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {JWT_SECRET } from "../../config.js"
import { userModel } from "./user.model.js";

export const registerUser = async (inputs) => {
    const { name, email, password, role } = inputs;
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
        throw new Error("Email already exists");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userModel.create({
        name,
        email,
        password: hashedPassword,
        role
    });
    return user;
};

export const loginUser = async (email, password) => {
    const user = await userModel.findOne({ email });
    if (!user) {
        throw new Error("INVALID EMAIL OR PASSWORD");
    }
    const validPassword = await bcrypt.compare(password,user.password);
    if (!validPassword) {
        throw new Error("INVALID EMAIL OR PASSWORD");
    }
    const token = jwt.sign(
        {
            id: user._id,
            email: user.email,
            role: user.role,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "1h",
        }
    );

    return token;
};