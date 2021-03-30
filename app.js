//Modulos
const express = require('express')
const handlebars = require('express-handlebars')
const path = require('path')
const dotenv = require('dotenv')
const {urlencoded, json} = require('body-parser')
const session = require('express-session')
const flash = require('connect-flash')
const passport = require('passport')
//configuração
require('./config/auth')(passport)
//const mongoose = require('mongoose')
const app = express()

//configurações
    //Sessão
        app.use(session({
            secret: "taskmanagement2021TKUV09",
            resave: true,
            saveUninitialized: true
        }))
        //Flash
        app.use(flash())
        //Passport
        app.use(passport.initialize())
        app.use(passport.session())

    //Midleware
        app.use((req, res, next) => {
            res.locals.success_msg = req.flash("success_msg")
            res.locals.error_msg = req.flash("error_msg")
            res.locals.error = req.flash("error")
            next()
        })

    //DotEnv
        dotenv.config({path:'config.env'})
        const PORT = process.env.PORT || 8080

    //body parser
        app.use(urlencoded({extended: true}))
        app.use(json())
    
    //View engine
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', "handlebars")
    
    //Arquivos estaticos
        app.use(express.static(path.resolve(__dirname, "public")))

    //mongoose
        // const connectDB = require('./database/connection')
        // connectDB()

//rotas
app.use('/', require('./routes/admin'))
app.use('/user', require('./routes/user'))
app.use('/ticket', require('./routes/ticket'))

//outros
app.listen(PORT, () => {console.log(`Servidor rodando em http://localhost:${PORT}`)})