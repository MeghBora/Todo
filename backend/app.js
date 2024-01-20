const express = require('express');
require('dotenv').config();
const app = express();
const db = require('./utils/db');
const bodyParser = require('body-parser');
const router = require('./Routes/authRoutes');

app.use(bodyParser.json());

db();
app.get('/',(req,res) =>{
    res.send('hello from server');
})
app.use('/v1',router);
app.listen(process.env.PORT,() =>{
    console.log('todo server running on '+ process.env.PORT);
});