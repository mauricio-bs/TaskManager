const mongoose = require('mongoose')

var stat = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

const status = mongoose.model('status', stat)
module.exports = status