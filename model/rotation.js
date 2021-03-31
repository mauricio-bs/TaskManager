//tabela de turnos (manhã, tarde, noite e adm) OBS: Conter o horario de inicio e fim de cada
const mongoose = require('mongoose')

var rot = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    period: {
        type: TimeRanges(),
        required: true
    }
})

const rotation = mongoose.model('rotation', rot)
module.exports = rotation