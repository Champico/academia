// middleware/corsMiddleware.js

import cors from 'cors'

const ACCEPTED_ORIGINS = [
    'http://localhost:5173',
    'http://localhost:1235'
]

export const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) => cors({
    origin: (origin, callback) => {
        if (!origin) {
            return callback(null, true);
        }

        if (acceptedOrigins.includes(origin)) {
            return callback(null, true);
        }

        return callback(new Error(`CORS no permitido desde ${origin}`), false);
    },
    credentials: true
});
