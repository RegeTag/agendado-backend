import mongoose from 'mongoose'
import { config } from 'dotenv'

config()

mongoose.connect(process.env.ATLAS_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

mongoose.connection.on("connected", () => {
    console.log("connected to DB")
})