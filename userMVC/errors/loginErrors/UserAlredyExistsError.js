export default class UserAlredyExitsError extends Error {
    constructor(message = 'El usuario ya existe') {
        super(message);

        this.name = 'UserAlredyExitsError';
        this.statusCode = 409;
    }
}
