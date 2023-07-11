import pkg from "pg"

const { Pool } = pkg

const connectiondb = new Pool({
    connectionString: process.env.DATABASE_URL,
})

export default connectiondb