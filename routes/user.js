//Rotas de usuarios
const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const passport = require('passport')
//Controlers
const UserCont = require('../controller/userController')
const ticket = require('../controller/ticketController')
//Auth
const { isAdmin } = require('../helpers/Authen')
//Config
const user = express.Router()

//cadastro de usuario
user.get('/register', (req, res) => {
	res.render('admin/register')
})

user.post('/register', UserCont.newUser)

user.get('/users', (req, res) => {
	res.render('admin/users')
})

//editar usuario
user.get('/users/edit/:id8', (req, res) => {
	res.render('admin/editUser')
})

//deletar usuario
user.get('/users/delete/:id', isAdmin, (req, res) => {
	res.render('admin/users')
})

module.exports = user
