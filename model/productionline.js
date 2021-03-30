//tabela das linhas de produção (KW's)
const mongoose = require('mongoose')

var prodl = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    alternName: {
        type: String,
        required: true
    },
    build: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'build',
        required: true
    }
})

const prodLine = mongoose.model('prodLine', prodl)
module.exports = prodLine