export default class AdminDoesntExitsError extends Error {
    constructor(message = 'El usuario administrador no existe') {
        super(message);

        this.name = 'AdminDoesntExitsError';
        this.statusCode = 404;
    }
}
