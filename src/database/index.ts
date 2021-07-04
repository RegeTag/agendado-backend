import mongoose from 'mongoose'
import { config } from 'dotenv'

config()

function connectToDB():Promise<void>{
    mongoose.connect(process.env.ATLAS_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    
    mongoose.connection.on("connected", () => {
        console.log("connected to DB")
    })
    
    return
}

function disconnectFromDB():Promise<void>{
    mongoose.disconnect()

    return
}

export {connectToDB, disconnectFromDB}