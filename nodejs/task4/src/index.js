import express from "express";
import mongoose from "mongoose";
import { bootstrap } from "./modules/connection.js"
import accController from "./modules/user.controller.js"
import { authentication } from "./middleware/auth.middleware.js";
import { authorization } from "./middleware/authorization.middleware.js";
const app = express()

bootstrap(app, 3000)

app.use(express.json())
app.use(accController)

app.get("/", (req, res) => {
    res.status(200).json({ message: "home" });
})

app.get("/shop", authentication, authorization("user", "admin"), (req, res) => {
    res.status(200).json({message:"shop"})
})
app.get("/admin", authentication, authorization("admin"), (req, res) => {
    res.status(200).json({message:"admin page"})
})