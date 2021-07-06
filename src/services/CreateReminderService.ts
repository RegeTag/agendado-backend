import ReminderEntity from '../models/ReminderEntity'
import UserEntity from '../models/UserEntity'

interface Ireminder{
    title:string
    email:string
    eventDate?:Date
    description:string
    
}

class CreateReminderService{
    async execute({eventDate, description, title, email}:Ireminder){
        
        if(!description || !title || !email){
            throw new Error("Reminder not valid!")
        }

        const user = await UserEntity.findOne({email})

        if(!user){
            throw new Error("Reminder not valid!")
        }

        const Reminder:Ireminder = {
            description, 
            eventDate, 
            email,
            title
        }

        const reminder = new ReminderEntity(Reminder)

        await reminder.save()

        return reminder
    }
}

export default new CreateReminderService()