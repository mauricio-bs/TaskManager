const mongoose = require('mongoose')

var uStat = new mongoose.Schema({
    status: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    }
})

const userStatus = mongoose.model('userStatus', uStat)
module.exports = userStatus