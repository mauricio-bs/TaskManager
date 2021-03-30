//Tabela de categorias / com ou sem chamado e projetos
const mongoose = require('mongoose')

var cat = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }    
})

const category = mongoose.model('category', cat)
module.exports = category