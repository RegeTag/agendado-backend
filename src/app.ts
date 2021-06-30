import Express from "express"
import 'express-async-errors'
import router from "./routes"
import "./database"
import errorHandleMiddleware from "./middlewares/errorHandleMiddleware"

const app = Express()

app.use(Express.json())

app.use(router)

app.use(errorHandleMiddleware)

export default app