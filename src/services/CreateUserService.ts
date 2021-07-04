import UserEntity from "../models/UserEntity"
import { hash } from 'bcryptjs'

interface Iuser{
    name: string
    email: string
    password: string
}

class CreateUserService{
    async execute({name, email, password}:Iuser){
        if(!name || !email || !password){
            throw new Error("Invalid user!")
        }

        const userAlreadyExists = await UserEntity.findOne({email}).exec()

        if(userAlreadyExists){
            throw new Error("User already exists!")
        }

        const hashPassword = await hash(password, 8)

        const user = new UserEntity({
            name,
            email, 
            password: hashPassword
        })

        await user.save()


        return user
    }
}

export default new CreateUserService()