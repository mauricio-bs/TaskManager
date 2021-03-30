//tabela de usuarios com acesso ao sistema
const mongoose = require('mongoose')

var user = new mongoose.Schema({

    psswd: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    id8: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    responsability: {
        type: String,
        required: true
    },
    department: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'department',
        required: true
    },
    company: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'company',
        required: true
    },
    role: {
        type: Number,
        default: 0
    },
    // status: {
    //     type: mongoose.SchemaTypes.ObjectId,
    //     ref: 'userStatus',
    //     default: '0'
    // }
})

const User = mongoose.model('User', user)
module.exports = User