const Joi = require('joi');

/**
 * Schema for validate data.
 * Login schema.
 */
module.exports = {
	user: Joi.object().keys({
		email: Joi.string().email().max(256).required(),
		password: Joi.string()
			.min(8)
			.required()
	})
};