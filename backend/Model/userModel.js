const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    name : {
        type: String,
        require: true
    },
    email : {
        type: String,
        require: true
    },
    password : {
        type: String,
        require: true
    },
    perform: {
        type: String,
        enum: ['poor', 'bad', 'average', 'good', 'outStanding'],
        default: 'average',
    },
    rating: {
        type: Number,
    }
});

module.exports = mongoose.model('user',Schema);