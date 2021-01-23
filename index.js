const mongoose = require('mongoose')
const matier = require('./Route/matier')
const express = require('express')

mongoose.connect('mongodb://localhost/sgbd')
.then(() => console.log('connected to Mongodb ...'))
.catch(err => console.error('could not connect to Mongodb',error))

const app = express()
app.use(express.json())


app.use('/api/matier',matier); 

const port = process.env.PORT || 3000

const server = app.listen(port , () => console.log('listening '))
module.exports=server

