const mongoose = require('mongoose');

const Albergue = mongoose.Schema({
    name:String,
    tel:String,
    addr:String,
    metro:String,
    bus:String,
    access:String,
    hours:String,
})
module.exports= mongoose.model("Albergue", Albergue);