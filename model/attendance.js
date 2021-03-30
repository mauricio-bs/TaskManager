//Tabela de atendimentos
const mongoose = require('mongoose')

var attend = new mongoose.Schema({
    ticket: {
        type: Number,
        required: true
    },
    dateStart: {
        type: Date,
        required: true
    },
    dateFinish: {
        type: Date
    },
    resume: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    havTicket: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'category',
        required: true
    },
    colaborator: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'colaborator',
        required: true
    },
    clerk: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'user',
        required: true
    },
    status: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'tkStatus',
        required: true
    }
})

const attendance = mongoose.model('attendance', attend)
module.exports = attendance