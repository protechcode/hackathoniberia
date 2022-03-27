const mongoose = require('mongoose');

const Register = mongoose.Schema({
    email:String,
    
})
module.exports= mongoose.model("Register", Register);