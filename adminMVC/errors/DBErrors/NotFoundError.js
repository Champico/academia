// adminMVC/errors/DBErrors/NotFoundError.js

export default class NotFoundError extends Error {
    constructor(message) {
        super(message);
        this.name = 'NotFoundError';
        this.statusCode = 404;
    }
}

