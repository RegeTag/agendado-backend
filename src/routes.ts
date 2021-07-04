import { Router } from 'express'
import CreateReminderController from './controllers/CreateReminderController'
import CreateUserController from './controllers/CreateUserController'

const router = Router()

router.post("/reminders", CreateReminderController.handle)

router.post("/users", CreateUserController.handle)


export default router