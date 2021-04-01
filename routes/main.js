const express = require('express')
const login = require('../controller/loginController')

const main = express.Router()

//Home Page
main.get('/', (req, res) => {
    res.render('index')
})

//logon
main.get('/login', (req, res) => {
    res.render('index')
})

main.post('/login', login.login)

// main.get('/sobre', (req, res) => {
//     res.render('/sobre', 'about')
// })

module.exports = main