import ReminderEntity from "../models/ReminderEntity"

class DeleteReminderService{
    async execute(reminderId:string){
        if(!reminderId){
            throw new Error("reminder invalid!")
        }

        const reminder = await ReminderEntity.findOne({_id:reminderId}).exec()

        if(!reminder){
            throw new Error("reminder invalid!")
        }

        await reminder.remove()


        return true
    }
}

export default new DeleteReminderService()