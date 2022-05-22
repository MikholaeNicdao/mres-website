'use strict'

const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

// Initialize Routes
const apiRoute = require('./src/routes/api.route')

require('dotenv').config()
<<<<<<< HEAD
const port = process.env.HPORT
=======
const port = process.env.PORT || 3306
>>>>>>> 97b91aaa3a099de46160ddf873c10851b405b30c

// Enable all CORS
app.use(cors())

// Initialize bodyparser to JSON
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// API
app.use('/api/v1/', apiRoute)

app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`)
})