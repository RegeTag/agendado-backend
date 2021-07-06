import {Request, Response, NextFunction} from 'express'
import { verify } from 'jsonwebtoken'

interface IdecodedToken{
    email: string
    iat: number
    exp: number
    sub: string
}

export default (req:Request, res:Response, next:NextFunction) => {
    let token = req.headers.authorization

    if(!token){
        return res.status(401).json({error:"Unauthorized!"})
    }

    token = token.replace("Bearer ", "")
    
    try {
        const decoded = verify(token, process.env.JWT_SECRET_KEY) as IdecodedToken
        
        req.userEmail = decoded.email

        next()
        
    } catch (error) {
        return res.status(401).json({error:"Unauthorized"})
    }
}