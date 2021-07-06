import ReminderEntity from '../models/ReminderEntity'
import UserEntity from '../models/UserEntity'

class GetUserReminderService{
    async execute(email:string){

        if(!email){
            throw new Error("User invalid!")
        }
        
        const user = await UserEntity.findOne({email})
        
        if(!user){
            throw new Error("User invalid!")
        }

        const reminders = await ReminderEntity.find({email})

        return reminders
    }
}

export default new GetUserReminderService()