import { Request, Response } from 'express'
import DeleteReminderService from '../services/DeleteReminderService'

class DeleteReminderController{
    async handle(req:Request, res:Response){
        const { reminderId } = req.body

        await DeleteReminderService.execute(reminderId)

        return res.json({message:"deleted"})
    }
}

export default new DeleteReminderController()