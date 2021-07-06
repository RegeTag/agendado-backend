import { Router } from 'express'
import ensureAuthMiddleware from './middlewares/ensureAuthMiddleware'
import CreateUserController from './controllers/CreateUserController'
import DeleteUserController from './controllers/DeleteUserController'
import CreateTokenController from './controllers/CreateTokenController'
import CreateReminderController from './controllers/CreateReminderController'
import GetUserRemindersController from './controllers/GetUserRemindersController'

const router = Router()


// ==================== Reminder routes ==========================

router.post("/reminders", ensureAuthMiddleware, CreateReminderController.handle)

router.get("/users/reminders", ensureAuthMiddleware, GetUserRemindersController.handle)

// ==================== User Routes ==============================

router.post("/users/signup", CreateUserController.handle)

router.post("/users/signin", CreateTokenController.handle)

router.delete("/users", ensureAuthMiddleware, DeleteUserController.handle)

// ==============================================================

export default router