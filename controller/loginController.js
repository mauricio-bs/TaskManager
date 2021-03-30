//Controller com ações de login login do usuario
const passport = require('passport')

//login
exports.login = (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/users/login',
        failureFlash: true
    })(req, res, next)
}

// exports.logof = (req, res, next) => {

// }
