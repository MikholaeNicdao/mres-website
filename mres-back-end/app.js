'use strict'

const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

// Initialize Routes
const apiRoute = require('./src/routes/api.route')

require('dotenv').config()
const port = process.env.PORT || 3306

// Enable all CORS
app.use(cors())

// Initialize bodyparser to JSON
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// API'sapi
app.use('/api/v1/', apiRoute)

app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`)
})