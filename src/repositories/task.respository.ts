import connectiondb from "../database/server.js";
import { Task } from "../models/task.model.js";

async function createTask(task: Task){
    await connectiondb.query(
        "INSERT INTO task (name, description, classification_id) VALUES ($1, $2, $3)", [task.name, task.description, task.classification_id]
    )
}

const taskRepository = {
    createTask
}

export default taskRepository