import { NextFunction, Request, Response } from "express";
import { Task } from "../models/task.model.js";

export function validateSchema(schema){
    return (req: Request, res: Response, next: NextFunction) => {
        const data = req.body as Task
        
        const { error } = schema.validate(data, {abortEarly: false})
        if(error){
            const errors = error.details.map( (detail) => detail.message )
            return res.status(422).send(errors)
        }

        res.locals.data = data
        next()
    }
}