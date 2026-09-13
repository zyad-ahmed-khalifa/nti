import { todoModel } from "../../db/models/todo.model.js"

export const createTask = async (inputs) => {
    const task = await todoModel.create(inputs);
    return task
}

export const editTask = async (id, inputs) => {
    const task = await todoModel.findOneAndUpdate(
        { _id: id },
        inputs, {
            returnDocument:"after"
        }
    );
    return task
}
export const deleteTask = async (id) => {
    const task = await todoModel.deleteOne( { _id: id });
    return task
}

export const listTask = async () => {
    const task = await todoModel.find({});
    return task
}
export const getByIdTask = async (id) => {
    const task = await todoModel.findOne({_id:id});
    return task
}

export const customGetTask = async (limit=10, skip=0) => {
    const task = await todoModel.find({}).limit(Number(limit)).skip(Number(skip));
    return task
}