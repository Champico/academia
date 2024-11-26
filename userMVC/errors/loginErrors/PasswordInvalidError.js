export default class PasswordInvalidError extends Error {
    constructor(message = 'Contraseña invalida') {
        super(message);

        this.name = 'PasswordInvalidError';
        this.statusCode = 404;
    }
}
