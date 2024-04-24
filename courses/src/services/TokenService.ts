import * as jwt from 'jsonwebtoken';

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

export class TokenService {
    verify(token: string) {
        try {
            return jwt.verify(token, JWT_SECRET_KEY);
        } catch (error) {
            throw new Error('Invalid or expired token');
        }
    }
}