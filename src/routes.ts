import { Router } from 'express'
import CreateReminderController from './controllers/CreateReminderController'

const router = Router()

router.post("/reminders", CreateReminderController.handle)


export default router