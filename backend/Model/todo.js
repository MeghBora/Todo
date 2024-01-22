const mongoose = require('mongoose');

const schema = mongoose.Schema({
    title: {
        type: String,
        require: true,
        unique: true
    },
    description: {
        type: String,
        default: '',
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    priority: {
        type: String, 
        enum: ['lowest', 'low', 'medium', 'heigh', 'heighest'],
        default: 'medium'
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    ticket: {
        type: Number,
    }
});

module.exports = mongoose.model('todo', schema);