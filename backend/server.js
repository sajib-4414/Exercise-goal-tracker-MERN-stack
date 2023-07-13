const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const port = process.env.port || 5000
connectDB()
const {errorHandler} = require('.//middleware/errorMiddleWare')

const app = express()
//to accept the body params in Post request, we need middleware json and urlencoded
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))
app.use(errorHandler)
app.listen(port, ()=> console.log(`Server started on port ${port}`))