const express = require('express');

/**
 * Middlewares
 */
const { 
	errorHandler,
	validation,
	passport
} = require('../middleware');

const { 
	registerSchema,
	loginSchema
} = require('../middleware/schemas');

/**
 * Requires all routes here.
 */
const { 
	register,
	getUsers
} = require('../routes/users');

const { 
	logIn
} = require('../routes/auth');

/**
 * Requires all models here.
 */
const User = require('../models/user');

/**
 * Combine all models to one object.
 */
const models = { User };

/**
 *
 */
const routersInit = () => {
	const router = express.Router();

	router.use('/register', register(models, validation, registerSchema));

	router.use('/login', logIn(passport));

	router.use('/users', getUsers(models));

	// Catch endpoints errors.
	router.use(errorHandler);

	return router;
};

module.exports = routersInit;
