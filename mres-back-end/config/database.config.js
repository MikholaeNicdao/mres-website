'use strict'

const mysql2 = require('mysql2')
require('dotenv').config()
 
const dbconnect = mysql2.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
<<<<<<< HEAD
    password: process.env.PASS,
    database: process.env.DATABASE,
    port: process.env.PORT,
=======
    database: process.env.DATABASE,
    port: 3307
>>>>>>> 97b91aaa3a099de46160ddf873c10851b405b30c
})

dbconnect.connect(function(err){
    if(err) throw err

    console.log('You are now connected to mysql database...')
})

module.exports = dbconnect