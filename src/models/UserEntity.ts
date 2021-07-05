import { model, Document } from 'mongoose'
import UserSchema from '../database/schemas/UserSchema'

interface Iuser extends Document {
    name: string
    email: string
    password: string
    created_at:Date
}

const UserEntity = model<Iuser>("user", UserSchema)

export default UserEntity