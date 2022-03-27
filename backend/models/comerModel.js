const mongoose = require('mongoose');

const Comedore = mongoose.Schema({
    name:String,
    tel:String,
    addr:String,
    metro:String,
    bus:String,
    access:String,
    hours:String,
})
module.exports= mongoose.model("Comedore", Comedore);