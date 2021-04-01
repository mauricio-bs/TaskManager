//Rotas de usuarios
const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const passport = require('passport')
//Controlers
const UserCont = require('../controller/userController')
const ticket = require('../controller/ticketController')
//Auth
const {isAdmin} = require('../helpers/Authen')
//Config
const user = express.Router()


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
user.get('/user/User/:id', isAdmin, (req, res) => {
    res.render('admin/users')
})

module.exports = user