const mongoose = require('mongoose');

const Connection = async () =>{
    try{
       await mongoose.connect(process.env.MONGO_URI);
      console.log('db connected');
    }catch(err){
        console.log('monoose error ', err);
    }
}

module.exports = Connection;