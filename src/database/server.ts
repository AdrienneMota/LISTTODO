import dotenv from "dotenv"
import pkg from "pg"

dotenv.config();

const { Pool } = pkg

const connectiondb = new Pool({
    connectionString: process.env.DATABASE_URL,
})

export default connectiondb