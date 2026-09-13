const fs = require("fs/promises")
const { resolve } = require("path")
const command = process.argv[2];
let id, title;

let data;

(async function getCommand() {
    if (command == "add") {
        title = process.argv[3]
        addTask(title)
    }
    if (command == "list") {
        console.log(await list());
    }
    if (command == "edit") {
        id = process.argv[3]
        title = process.argv[4]
        edit(id, title )
    }
    if (command == "delete") {
        id = process.argv[3]
        deleteTask(id)
    }
    console.log({ command, id, title });
})()

async function readFile() {
    try {
        let data = await fs.readFile(resolve("./todo.json"), "utf-8")
        return JSON.parse(data);
    } catch (error) {
        console.log("error in file ")
    }
}

async function addTask(title) {
    let data = await readFile();
    let task = {
        id: data.length + 1,
        taskTitle: title
    }
    data.push(task);
    await fs.writeFile(resolve("./todo.json"), JSON.stringify(data));
}

async function list() {
    const data = await readFile();
    return data 
}

async function edit(id, title) {
    const data = await readFile();
    const task = data.find((task) => {
        return task.id == id
    })
    task.taskTitle = title
    await fs.writeFile(resolve("./todo.json"), JSON.stringify(data));
}

async function deleteTask(id) {
    let data = await readFile();
    const tasks = data.filter((task) => {
        return task.id != id
    })
    data = tasks
    await fs.writeFile(resolve("./todo.json"), JSON.stringify(data));
}

