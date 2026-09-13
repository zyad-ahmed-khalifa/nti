import { Router } from "express";
import { createTask, editTask, deleteTask, listTask, getByIdTask, customGetTask } from "./todo.service.js";
const router = Router();

router.post("/todos",async (req, res) => {
    const task = await createTask(req.body);
    return res.status(200).json({ message: "done", task });
})
router.patch("/todos/:id",async (req, res) => {
    const task = await editTask(req.params.id,req.body);
    return res.status(200).json({ message: "done", task });
})
router.delete("/todos/:id",async (req, res) => {
    const task = await deleteTask(req.params.id);
    return res.status(200).json({ message: "done", task });
})
router.get("/todos/",async (req, res) => {
    const task = await listTask();
    return res.status(200).json({ message: "done", task });
})
router.get("/todos/search",async (req, res) => {
    const task = await customGetTask(req.query.limit, req.query.skip);
    return res.status(200).json({ message: "done", task });
})
router.get("/todos/:id",async (req, res) => {
    const task = await getByIdTask(req.params.id);
    return res.status(200).json({ message: "done", task });
})


export default router