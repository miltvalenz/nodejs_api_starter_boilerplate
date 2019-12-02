const express = require('express');

/**
 * Middlewares
 */
const { errorHandler } = require('../middleware');

/**
 * Requires all routes here.
 */
const { getUsers } = require('../../routes/users');

/**
 * Requires all models here.
 */
const User = require('../../models/user');

/**
 * Combine all models to one object.
 */
const models = { User };

/**
 *
 */
const routersInit = () => {
	const router = express.Router();

	router.use('/users', getUsers(models));

	// Catch endpoints errors.
	router.use(errorHandler);

	return router;
};

module.exports = routersInit;
