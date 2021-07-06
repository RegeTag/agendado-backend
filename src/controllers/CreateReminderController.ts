import { Request, Response } from 'express'
import CreateReminderServices from '../services/CreateReminderService'

class CreateReminderController{
    async handle(req:Request, res:Response){
        const { eventDate, description, title } = req.body

        const email = req.userEmail

        const reminder = await CreateReminderServices.execute({eventDate, description, title, email})

        return res.status(201).json({reminder})
    }
}

export default new CreateReminderController()