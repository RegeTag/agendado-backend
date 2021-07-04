import { model } from 'mongoose'
import UserSchema from '../database/schemas/UserSchema'

const UserEntity = model("user", UserSchema)

export default UserEntity