const express = require('express');
const router = express.Router();

/**
 * GET
 * Logout route.
 */
module.exports = () => {
	router.get('/', async (req, res, next) => {
		try {
			req.logout();
			res.status(200).json({ Users: 'You are out!' });
		} catch {
			next(error);
		}
	});

	return router;
};