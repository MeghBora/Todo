const express = require('express');
require('dotenv').config();
const app = express();

app.get('/',(req,res) =>{
    res.send('hello from server');
})

app.listen(process.env.PORT,() =>{
    console.log('todo server running on '+ process.env.PORT);
});