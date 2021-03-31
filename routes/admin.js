//Rotas administradoras
const express = require('express')
const adm = express.Router()
const adminCont = require('../controller/adminController')

//Colaboradores
adm.get('/colaborators', (req, res) => {
    res.render('admin/colaborator/colaborators')
})

//Registrar colaboradores
adm.get('/colaborators/register', (req, res) => {
    res.render('admin/colaborator/regColaborator')
})

adm.post('/colaborators/register', adminCont.regColab)


//Editar colaborador
adm.get('/colaborators/editColab/:_id', (req, res) => {
    res.render('')
})

//Buscar colaborador
// adm.get('/colaborators/search/:id8', admin.searchColab)

module.exports = adm