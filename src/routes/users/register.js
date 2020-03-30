const express = require('express');
const router = express.Router();

/**
 * 
 * POST
 * User register.
 * 
 */
 module.exports = ({ User }, validation, schema) => {
     router.post('/', validation(schema.user, 'body'), async(req, res, next) => {
        try{
            const {
                name,
                email,
                password,
                passwordConfirmation
            } = req.body;

            const user = new User({
                name,
                email,
                password
            });

            user.password = await user.encryptPassword(password);
            await user.save();

            res.status(200).json({ User: user });
        } 
        catch {
            res.status(400).send({
                error:
						'req body should take the form { username, password }'
            });
        }
     });
     return router;
 };