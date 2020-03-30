const Joi = require('joi');

/**
 * Schema for validate data.
 * Register User schema.
 */
module.exports = {
	user: Joi.object().keys({
		name: Joi.string()
			.min(3)
			.max(30)
			.required(),
		email: Joi.string().email().max(256).required(),
		password: Joi.string()
			.min(8)
			.required(),
		passwordConfirmation: Joi.string()
			.min(8)
			.required()
	})
};