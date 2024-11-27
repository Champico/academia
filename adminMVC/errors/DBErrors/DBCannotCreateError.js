// userMVC/errors/DBCannotCreateError.js

export default class DBCannotCreateError extends Error {
    constructor(message = 'No se pudo crear el item') {
        super(message);

        this.name = 'DBCannotCreateError';
        this.statusCode = 500;
    }
}
