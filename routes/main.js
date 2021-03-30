//Rotas iniciais
const express = require('express')
const main = express.Router()

//Home Page
main.get('/', (req, res) => {
    res.redirect('login')
})

// main.get('/sobre', (req, res) => {
//     res.render('/sobre', 'about')
// })

module.exports = main