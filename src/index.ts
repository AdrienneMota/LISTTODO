import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import pkg from "pg" 

import { Request, Response } from "express";

/////////////////////////////////////////////
dotenv.config()

const {Pool} = pkg

const app = express() //para usar o express para poder usar o http de forma mais fácil
app.use(cors())
app.use(express.json()) //para usar o json
/////////////////////////////////////////////

const connectiondb = new Pool({
    connectionString: process.env.DATABASE_URL,
})

/////////////////////////////////////////////

type Task = { name: string, description: string, classification: string }

app.post("/task", async (req: Request, res: Response) => { // função async é para parar tudo para todo os recursos serem focados para esta ação
    const body = req.body as Task

    try{
        await connectiondb.query("INSERT INTO task (name, description, classification VALUES ($1, $2, $3)", [body.name,body.description, body.classification])

        res.sendStatus(201)
    }catch(error){
        console.log(error)
        res.sendStatus(500)
    }

})

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`server is running in port ${port}`))