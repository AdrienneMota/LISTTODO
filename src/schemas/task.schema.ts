import joi from "joi"
import { Task } from "../models/task.model.js"

const taskSchema = joi.object<Task>({
    name: joi.string().min(1).max(100).required(),
    description: joi.string().min(1).required(),
    classification_id: joi.number().required(),
})

export default taskSchema