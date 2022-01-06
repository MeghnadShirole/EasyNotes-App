import HttpStatus from 'http-status-codes';
import jwt from 'jsonwebtoken';

/**
 * Middleware to authenticate if note has a valid Authorization token
 * Authorization: Bearer <token>
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export const noteAuth = async(req, res, next) => {
    try {
        let bearerToken = req.header('Authorization');
        if (!bearerToken)
            throw {
                code: HttpStatus.BAD_REQUEST,
                message: 'Authorization token is required'
            };
        bearerToken = bearerToken.split(' ')[1];

        const { note } = await jwt.verify(bearerToken, 'your-secret-key');
        res.locals.note = note;
        res.locals.token = bearerToken;
        next();
    } catch (error) {
        next(error);
    }
};