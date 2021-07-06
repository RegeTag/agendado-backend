import { Request, Response } from 'express'
import DeleteUserService from '../services/DeleteUserService'

class DeleteUserController{
    async handle(req:Request, res:Response){
        const emailToDelete = req.body.email

        const tokenEmail = req.userEmail

        await DeleteUserService.execute(tokenEmail, emailToDelete)

        return res.sendStatus(200)
    }
}

export default new DeleteUserController()