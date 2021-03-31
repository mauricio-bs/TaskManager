const flash = require('connect-flash')
const session = require('express-session')
//models
const db = require('../model/attendance')

exports.ticketDetails = ((req, res) => {
    if(!req.body._id || req.body._id == undefined || req.body._id == null){
        req.flash('error_msg', 'Este ticket não existe')
    }
    else{
        res.redirect('attendance/details/:id')
    }
})

exports.modifyTicket = ((req, res) => {
    if(!req.body._id || req.body._id == undefined || req.body._id == null){
        req.flash('error_msg', 'Este ticket não existe')
    }
    else{
        
    }
})