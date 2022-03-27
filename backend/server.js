const express =require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const configFile = require('./config')

const connection = configFile.dburi;


mongoose
.connect(connection)
.then(() => {
    const app = express();
    app.use(cors());
    

    const port = process.env.PORT || 5000;
    app.listen(port, ()=>{console.log(`server up and running at: ${port}`)})
    
})



