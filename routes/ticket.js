//rotas relacionadas aos atendimentos
const express = require('express')
const atend = express.Router()
//controller
const ticket = require('../controller/ticketController')
const attendance = require('../model/attendance')
//Helper
const {Authenticated} = require('../helpers/Authen')

atend.get('/dashboard', Authenticated , (req, res) => {
    res.render('attendance/dashboard')
})

atend.get('/ticket/:_id', Authenticated , attendance)

module.exports = atend