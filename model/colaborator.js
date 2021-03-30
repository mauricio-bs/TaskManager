//tabela de colaboradores
const mongoose = require('mongoose')
//informações do colaborador (8ID, nome, departamento(FK), turno, empresa)

var colab = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    birthday: {
        type: Date,
        required: true
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
    // status: {
    //     type: Number,
        
    // }
})

const colaborator = mongoose.model('colaborator', colab)
module.exports = colaborator