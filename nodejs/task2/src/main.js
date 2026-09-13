import express from "express";
const app = express();
import { port } from "../config.js";
import { bootstrap } from "./db/connection.js";
import todoController from "./modules/todo/todo.controller.js"

bootstrap(app, port)
app.use(express.json())
app.use(todoController)

app.get("/", (req, res) => {
    res.status(200).json({ message: "home" });
})