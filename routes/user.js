//Rotas de usuarios
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const passport = require("passport");
//Controlers
const UserCont = require("../controller/userController");
const ticket = require("../controller/ticketController");
//Auth
const { isAdmin } = require("../helpers/Authen");
//Config
const user = express.Router();

//cadastro de usuario
user.get("/register", (req, res) => {
  res.render("admin/register");
});

user.post("/register", UserCont.newUser);

//editar usuario
// user.get('/Users/edit/:id8', (req, res) => {

// })

//deletar usuario
user.get("/user/User/:id", isAdmin, (req, res) => {
  res.render("admin/users");
});

module.exports = user;
