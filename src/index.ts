import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import taskRouter from "./routers/task.router.js";

dotenv.config()

const app = express() 
app.use(cors())
app.use(express.json()) 
app.use(taskRouter)

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`server is running in port ${port}`))