import { Request, Response } from 'express'
import CreateReminderServices from '../services/CreateReminderService'

class CreateReminderController{
    async handle(req:Request, res:Response){
        const { EventDate, description, title } = req.body

        const reminder = await CreateReminderServices.execute({EventDate, description, title})

        return res.status(201).json({reminder})
    }
}

export default new CreateReminderController()