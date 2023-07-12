const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.port || 5000
const {errorHandler} = require('.//middleware/errorMiddleWare')
const app = express()
//to accept the body params in Post request, we need middleware json and urlencoded
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/goals', require('./routes/goalRoutes'))
app.use(errorHandler)
app.listen(port, ()=> console.log(`Server started on port ${port}`))