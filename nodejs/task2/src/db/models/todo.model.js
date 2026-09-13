import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required:true
    },
    status: {
        type: String,
        enum: ["to-do", "in progress", "done"],
        default: "todo"
    }

}, {
    timestamps: true
})

export const todoModel = mongoose.model("todo", todoSchema)