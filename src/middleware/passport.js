const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const passportJWT = require('passport-jwt');
const jwt = require('jsonwebtoken');
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

const User = require('../models/user');
// const { secret } = require('./keys');

passport.use(
	new LocalStrategy(
		{
			usernameField: 'email',
			passwordField: 'password'
		},
		async (email, password, done) => {
			try {
				const user = await User.findOne({ email: email });
				const match = await user.matchPassword(password);

				if (match) {
					return done(null, user, {
						message: 'Logged In Successfully'
					});
				} else {
					return done('Incorrect Username or Password');
				}
			} catch (error) {
				done(error);
			}

		}
	)
);

passport.use(
	new JWTStrategy(
		{
			jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
			secretOrKey: 'marico el que lo lea'
		},
		(jwtPayload, done) => {
			console.log(jwtPayload);
			if (Date.now() > jwtPayload.expires) {
				return done('jwt expired');
			}

			return done(null, jwtPayload);
		}
	)
);


module.exports = passport;