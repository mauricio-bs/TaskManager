//rotas relacionadas aos atendimentos
const express = require('express')
const atend = express.Router()
//controller
const ticket = require('../controller/ticketController')
const attendance = require('../model/attendance')

atend.get('/dashboard', (req, res) => {
    res.render('attendance/dashboard')
})

atend.get('/ticket/:_id', attendance)

module.exports = atend