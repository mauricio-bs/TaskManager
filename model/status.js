const mongoose = require('mongoose')

var uStat = new mongoose.Schema({
     name: {
        type: String,
        required: true
    }
})

const userStatus = mongoose.model('userStatus', uStat)
module.exports = userStatus