const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/sgbd')
.then(() => console.log('connected to Mongodb ...'))
.catch(err => console.error('could not connect to Mongodb',error))

// 1 la declaration du schema 

const MatierSchema = new mongoose.Schema({
    name:String
})

// 2 la creation de la classe 

const Matier = mongoose.model('Matier',MatierSchema)

//3 la creation de l'objet 

async function CreateMatier(){
    const matier = new Matier({
        name:"Programmation"
    })
    
    const result = await matier.save()
    console.log(result)
}

CreateMatier();

