const express = require('express');
const Register = require('../models/registerModel');
const router = express.Router();


router.get("/registered", async (req, res) => {
    const registered = await Register.find();
    console.log(registered)


    res.send(registered);

})
router.post("/register", async (req, res) => {

    console.log(req.body)

    const email = req.body.email;
  
    
    const userToRegister = await Register.create({
       email:email
    }, function (err, small) {
        if (err) {
            return handleError(err)
        }else{
            res.send("Success")
        };

    });
})


module.exports = router;