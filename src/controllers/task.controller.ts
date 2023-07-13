import { Request, Response } from "express";
import { Task, genericTask } from "../models/task.model.js";
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

export async function listTask (req: Request, res: Response){
    const task = req.params as genericTask

    try {
    // if(task){
    //     const data = await taskRepository.listTask(task) as Task
    // }

    const data = await taskRepository.listTask()
    res.status(200).send(data)

    } catch (error) {
        res.status(500).send(error)
    }
    
    
}

const taskController = {
    createTask,
    listTask
}

export default taskController