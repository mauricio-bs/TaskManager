//Rotas administradoras
const express = require('express')
const adm = express.Router()
//Controller
const adminCont = require('../controller/adminController')
//Autenticação
const {isAdmin} = require('../helpers/Authen')

//Colaboradores
adm.get('/colaborators', isAdmin, (req, res) => {
    res.render('admin/colaborator/colaborators')
})

//Registrar colaboradores
adm.get('/colaborators/register', isAdmin, (req, res) => {
    res.render('admin/colaborator/regColaborator')
})

adm.post('/colaborators/register', isAdmin, adminCont.regColab)


//Editar colaborador
adm.get('/colaborators/editColab/:_id', isAdmin, (req, res) => {
    res.render('')
})

//Buscar colaborador
// adm.get('/colaborators/search/:id8', isAdmin, admin.searchColab)

module.exports = adm