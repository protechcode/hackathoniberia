const express = require('express');
const Comedores = require('../models/comerModel');
const router = express.Router();


router.get("/comedores", async (req, res) => {
    const comedores = await Comedores.find();
    console.log(comedores)


    res.send(comedores);

})
router.post("/comedores", async (req, res) => {

    console.log(req.body)

    const name = req.body.name;
    const tel = req.body.tel;
    const addr = req.body.addr;
    const metro = req.body.metro;
    const bus = req.body.bus;
    const access = req.body.access;
    const hours = req.body.hours;
    const nuevoComedor = {
        name: name,
        tel: tel,
        addr: addr,
        metro: metro,
        bus: bus,
        access: access,
        hours: hours

    }
    
    const comedores = await Comedores.create({
        name: nuevoComedor.name,
        tel: nuevoComedor.tel,
        addr: nuevoComedor.addr,
        metro: nuevoComedor.metro,
        bus: nuevoComedor.bus,
        access: nuevoComedor.access,
        hours: nuevoComedor.hours
    }, function (err, small) {
        if (err) {
            return handleError(err)
        }else{
            res.send("Success")
        };

    });
})


module.exports = router;