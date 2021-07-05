import { Schema } from 'mongoose'

const ReminderSchema = new Schema({
    eventDate: Date,
    title: String,
    description: String,
    email: String
})

export default ReminderSchema