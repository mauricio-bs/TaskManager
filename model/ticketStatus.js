const mongoose = require('mongoose')

var stat = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

const tkStatus = mongoose.model('tkStatus', stat)
module.exports = tkStatus