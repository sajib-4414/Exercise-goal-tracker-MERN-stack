const path = require('path')
const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const cors = require('cors');
const port = process.env.port || 5000

connectDB()
const {errorHandler} = require('.//middleware/errorMiddleWare')

const app = express()
app.use(cors());
//to accept the body params in Post request, we need middleware json and urlencoded
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

// //serve frontend
// if(process.env.NODE_ENV == "production"){
//     //for production, we have to build the application into html build, there will be an index html entry
//     //file for the production build. That build is only created when you run npm run build
//     //with dev server running,that build is not created, once the build is created, then...
//     //first set the static/build folder, that is the folder, react will build assets
//     app.use(express.static(path.join(__dirname,"../frontend/build")))
//     app.get('*', (req,res)=> res.sendFile(path.resolve(__dirname,"../","frontend","build","index.html")))
// } else{
//     app.get("/", (req,res) => res.send("Please set to production"))
// }
app.use(errorHandler)

app.listen(port, ()=> console.log(`Server started on port ${port}`))