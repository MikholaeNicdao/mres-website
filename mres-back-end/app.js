const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

require('dotenv').config()
const port = process.env.PORT || 4000

// Enable all CORS
app.use(cors())

// Initialize bodyparser to JSON
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`)
})