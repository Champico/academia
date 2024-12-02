export default class PasswordInvalidError extends Error {
    constructor(message = 'Contraseña incorrecta') {
        super(message);

        this.name = 'PasswordInvalidError';
        this.statusCode = 404;
    }
}
