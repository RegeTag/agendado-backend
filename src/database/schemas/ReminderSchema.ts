import { Schema } from 'mongoose'

const ReminderSchema = new Schema({
    EventDate: Date,
    title: String,
    description: String
})

export default ReminderSchema