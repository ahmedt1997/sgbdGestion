const mongoose = require('mongoose')

// 1 la declaration du schema 

const MatierSchema = new mongoose.Schema({
    name:String
})

// 2 la creation de la classe 

const Matier = mongoose.model('Matier',MatierSchema)

module.exports=MatierSchema
module.exports=Matier