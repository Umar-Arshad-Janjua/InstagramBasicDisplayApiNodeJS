const mongoose = require('mongoose');
const express = require('express')
const dotenv = require('dotenv')
const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser());
dotenv.config({path : './config.env'})
require('./db/connection');

app.use(express.json());
app.use(require('./router/auth'));
const PORT = process.env.PORT;




app.listen(PORT, ()=>{

    console.log(`App is running on port ${PORT}`)
})