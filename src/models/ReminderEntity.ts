import { model } from 'mongoose'
import ReminderSchema from '../database/schemas/ReminderSchema'

const ReminderEntity = model("reminders", ReminderSchema)

export default ReminderEntity