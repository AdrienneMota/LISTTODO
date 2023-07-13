import { Router } from "express";
import { validateSchema } from "../middlewares/task.middleware.js";
import taskSchema from "../schemas/task.schema.js";
import taskController from "../controllers/task.controller.js";

const taskRouter = Router()

taskRouter.post('/task', validateSchema(taskSchema), taskController.createTask)
taskRouter.get('/task', taskController.listTask)

export default taskRouter