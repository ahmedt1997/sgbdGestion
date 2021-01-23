const express = require('express');
const router = express.Router();

const Matier = require('../Model/matier')


router.get('/',async (req,res) => {
    const matier = await Matier.find().sort('name');
    res.send(matier)
})


module.exports=router