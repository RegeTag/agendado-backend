import ReminderEntity from '../models/ReminderEntity'

interface Ireminder{
    title:string
    EventDate:Date
    description:string
}

class CreateReminderService{
    async execute({EventDate, description, title}:Ireminder){
        
        if(!EventDate || !description || !title){
            throw new Error("Reminder not valid!")
        }

        const Reminder:Ireminder = {
            description, 
            EventDate, 
            title
        }

        const reminder = new ReminderEntity(Reminder)

        await reminder.save()

        return reminder
    }
}

export default new CreateReminderService()
export { Ireminder }