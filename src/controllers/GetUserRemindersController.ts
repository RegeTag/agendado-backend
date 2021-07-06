import { Request, Response } from 'express'
import GetUserRemindersService from '../services/GetUserRemindersService'

class GetUserRemindersController{
    async handle(req:Request, res:Response){
        const email = req.userEmail

        const reminders = await GetUserRemindersService.execute(email)

        return res.json({reminders})
    }
}

export default new GetUserRemindersController()