const express =require('express');
const cors = require('cors');
const mongoose = require('mongoose');


const configFile = require('./config')
const comerRoutes = require('./routes/comerRoutes');
const dormirRoutes = require('./routes/dormirRoutes');
const lavarseRoutes = require('./routes/lavarseRoutes');
const registerRoutes = require('./routes/registerRoutes');

const connection = configFile.dburi;

mongoose
.connect(connection)
.then(() => {
    const app = express();
    app.use(express.json())
    app.use(cors());
    app.use("/api", comerRoutes) // new
    app.use("/api", dormirRoutes) // new
    app.use("/api", lavarseRoutes) // new
    app.use("/api", registerRoutes) // new
    

    const port = process.env.PORT || 5000;
    app.listen(port, ()=>{console.log(`server up and running at: ${port}`)})
    
})



