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
    //0 = Usuario(Padrão) | 1 = Administrador | 2 = Atendente
    role: {
        type: Number,
        default: 0
    },
    //0 = desativado | 1 = ativo
    status: {
        type: Number,
        default: 1
    }
})

const User = mongoose.model('User', user)
module.exports = User