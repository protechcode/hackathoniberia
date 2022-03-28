const express = require('express');
const Albergue = require('../models/dormirModel');
const router = express.Router();


router.get("/albergues", async (req, res) => {
    const albergue = await Albergue.find();
    console.log(Albergue)


    res.send(albergue);

})
router.post("/albergues", async (req, res) => {

    console.log(req.body)

    const name = req.body.name;
    const tel = req.body.tel;
    const addr = req.body.addr;
    const metro = req.body.metro;
    const bus = req.body.bus;
    const access = req.body.access;
    const hours = req.body.hours;
    const nuevoAlbergue = {
        name: name,
        tel: tel,
        addr: addr,
        metro: metro,
        bus: bus,
        access: access,
        hours: hours

    }
    
    
    const albergue = await Albergue.create({
        name: nuevoAlbergue.name,
        tel: nuevoAlbergue.tel,
        addr: nuevoAlbergue.addr,
        metro: nuevoAlbergue.metro,
        bus: nuevoAlbergue.bus,
        access: nuevoAlbergue.access,
        hours: nuevoAlbergue.hours
    }, function (err, small) {
        if (err) {
            return handleError(err)
        }else{
            res.send("Success")
        };

    });
})


module.exports = router;