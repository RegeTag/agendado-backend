import app from "./app"
import dotenv from 'dotenv'

dotenv.config()

const port = process.env.NODE_PORT || 3000

app.listen(port, () => console.log(`Running at port ${port}!`))