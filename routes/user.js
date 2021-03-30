//Rotas de usuarios
const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const passport = require('passport')
//Controlers
const UserCont = require('../controller/userController')
const login = require('../controller/loginController')
const ticket = require('../controller/ticketController')
//Config
const user = express.Router()


//logon
user.get('/login', (req, res) => {
    res.render('users/login')
})

user.post('/login', login.login)

// //logoff
// user.get('/user/logoff', (req, res) => {
//     res.render('users/logoff')
// })

//cadastro de usuario
user.get('/register', (req, res) => {
    res.render('user/register')
})

user.post('/register/:id8', UserCont.newUser)

//editar usuario
user.get('/user/User', (req, res) => {
    res.render('users/User')    
})

//deletar usuario
user.get('/user/User/:id', (req, res) => {
    res.render('users')
})

module.exports = user