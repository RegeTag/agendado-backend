import UserEntity from "../models/UserEntity"
import { config } from 'dotenv'
import { sign } from 'jsonwebtoken'
import { compare } from 'bcryptjs'

config()

interface Iuser{
    email:string
    password:string
}



class CreateTokenService{
    async execute({email, password}:Iuser){
        if(!email || !password){
            throw new Error("Invalid user!")
        }

        const user = await UserEntity.findOne({email})
        
        if(!user){
            throw new Error("Invalid user!")
        }


        const passwordValid = await compare(password, user.password)

        if(!passwordValid){
            throw new Error("Invalid user!")
        }

        const token = sign({email}, process.env.JWT_SECRET_KEY, {subject: user.id, expiresIn:"1d"})

        return token

    }
}

export default new CreateTokenService()