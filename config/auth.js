const localStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
//models
const User = require('../model/user')

module.exports = function (passport) {
	passport.use(
		new localStrategy({ usernameField: 'id8' }, (id8, psswd, done) => {
			User.findOne({ id8: id8 }).then((user) => {
				if (!user) {
					return done(null, false, { message: 'Esta conta não existe' })
				}

				bcrypt.compare(psswd, user.password, (erro, batem) => {
					if (batem) {
						return done(null, user)
					} else {
						return done(null, false, { message: 'Senha incorreta' })
					}
				})
			})
		})
	)

	passport.serializeUser((user, done) => {
		done(null, user.id)
	})

	passport.deserializeUser((id, done) => {
		User.findById(id, (err, user) => {
			done(err, user)
		})
	})
}
