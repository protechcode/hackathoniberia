const express =require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
// app.use(mongoose);

const port = process.env.PORT || 5000;

app.listen(port, ()=>{console.log(`server up and running at: ${port}`)})