import {Request, Response} from 'express'
import CreateTokenService from '../services/CreateTokenService'

class CreatetokenController{
    async handle(req:Request, res:Response){
        const {email, password} = req.body

        const token = await CreateTokenService.execute({email, password})

        return res.json({token})
    }
}

export default new CreatetokenController()