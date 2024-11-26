export default class UserDoesntExitsError extends Error {
    constructor(message = 'El usuario no existe') {
        super(message);

        this.name = 'UserDoesntExitsError';
        this.statusCode = 404;
    }
}
