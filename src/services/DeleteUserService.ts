import UserEntity from "../models/UserEntity"

class DeleteUserService{
    async execute(tokenEmail:string, emailToDelete:string){
        if(!tokenEmail || !emailToDelete){
            throw new Error("Invalid email!")
        }

        if(tokenEmail != emailToDelete){
            throw new Error("Unauthorized")
        }

        await UserEntity.findOneAndRemove({email:emailToDelete}).exec()

        return true
    }
}

export default new DeleteUserService()