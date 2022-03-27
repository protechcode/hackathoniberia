const express = require('express');
const Comer = require('../models/comerModel');
const router =express.Router();

router.get("/test", async (req,res)=>{
    const comedores = Comer.find();
    res.send(comedores);
})


module.exports =router;