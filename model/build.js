//tabela de prédios
const mongoose = require('mongoose')
const Schema = mongoose.Schema()

var building = new Schema({
    name: {
        type: String,
        required: true
    },
    department: {
        type: mongoose.SchemaTypes,
        ref: 'department',
        required: true
    }
})

const build = mongoose.model('build', building)
module.exports = build