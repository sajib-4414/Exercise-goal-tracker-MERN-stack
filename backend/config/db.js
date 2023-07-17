const mongoose = require('mongoose')
const MONGO_URI = "mongodb+srv://shamsularefinsajib:cszGhucpyWEBExiD@cluster-mongo-db.uons7io.mongodb.net/mernapp?retryWrites=true&w=majority"
const connectDB = async () =>{
    try{
        // const conn = await mongoose.connect(process.env.MONGO_URI)
        //dockerfile env are not being loaded, dockercompose only works
        //for kubernetes they are being unloaded
        const conn = await mongoose.connect(MONGO_URI)
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    } catch(error){
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB