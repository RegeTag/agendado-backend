import { Schema } from 'mongoose'

const ReminderSchema = new Schema({
    EventDate: Number,
    title: String,
    description: String
})

export default ReminderSchema