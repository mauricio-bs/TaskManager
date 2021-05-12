//Controller com ações de login login do usuario
const passport = require('passport')

//login
exports.login = (req, res, next) => {
	passport.authenticate('local', {
		successRedirect: '/',
		failureRedirect: '/users/login',
		failureFlash: true,
	})(req, res, next)
}

//logoff
exports.logoff = (req, res) => {
	req.logout()
	res.redirect('/')
}
