const express = require('express');
const Lavatorio = require('../models/lavarseModel');
const router = express.Router();


router.get("/lavatorios", async (req, res) => {
    const lavatorio = await Lavatorio.find();
    console.log(lavatorio)


    res.send(lavatorio);

})
router.post("/lavatorios", async (req, res) => {

    console.log(req.body)

    const name = req.body.name;
    const tel = req.body.tel;
    const addr = req.body.addr;
    const metro = req.body.metro;
    const bus = req.body.bus;
    const access = req.body.access;
    const hours = req.body.hours;
    const nuevolavatorio = {
        name: name,
        tel: tel,
        addr: addr,
        metro: metro,
        bus: bus,
        access: access,
        hours: hours

    }
    
    
    const lavatorio = await Lavatorio.create({
        name: nuevolavatorio.name,
        tel: nuevolavatorio.tel,
        addr: nuevolavatorio.addr,
        metro: nuevolavatorio.metro,
        bus: nuevolavatorio.bus,
        access: nuevolavatorio.access,
        hours: nuevolavatorio.hours
    }, function (err, small) {
        if (err) {
            return handleError(err)
        }else{
            res.send("Success")
        };

    });
})


module.exports = router;