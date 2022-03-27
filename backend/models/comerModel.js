const mongoose = require('mongoose');

const Comer = mongoose.Schema({
    name:String,
    tel:String,
    addr:String,
    metro:String,
    bus:String,
    access:String,
    hours:String,
})
module.exports= mongoose.model("Comer", Comer);