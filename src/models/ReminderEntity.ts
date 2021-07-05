import { model, Document } from 'mongoose'
import ReminderSchema from '../database/schemas/ReminderSchema'

interface Ireminder extends Document{
    description: string
    eventDate: Date
    email: string
    title: string
}

const ReminderEntity = model<Ireminder>("reminders", ReminderSchema)

export default ReminderEntity