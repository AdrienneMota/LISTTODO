import { Request, Response } from "express";
import { Task } from "../models/task.model.js";
import taskRepository from "../repositories/task.respository.js";

export async function createTask (req: Request, res: Response){
    const task = res.locals.data as Task

    try {
        await taskRepository.createTask(task)
        res.sendStatus(201)
    } catch (error) {
        res.status(500).send(error)
        console.log(error)
    }
}

const taskController = {
    createTask
}

export default taskController