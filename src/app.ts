import Express from "express"
import router from "./routes"
import "./database"

const app = Express()

app.use(Express.json())

app.use(router)

export default app