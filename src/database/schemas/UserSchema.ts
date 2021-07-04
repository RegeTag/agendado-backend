import { Schema } from 'mongoose'

const userSchema = new Schema({
    email: String,
    name: String,
    password: String,
    created_at: {
        type: Date,
        default: Date.now()
    }
})

export default userSchema
