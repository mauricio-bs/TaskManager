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
    res.render('login')
})

user.post('/login', login.login)

// //logoff
// user.get('/user/logoff', (req, res) => {
//     res.render('users/logoff')
// })

//cadastro de usuario
user.get('/register', (req, res) => {
    res.render('admin/register')
})

user.post('/register/:id8', UserCont.newUser)

//editar usuario
user.get('/Users', (req, res) => {
    res.render('admin/Users')    
})

//deletar usuario
user.get('/user/User/:id', (req, res) => {
    res.render('admin/users')
})

module.exports = user