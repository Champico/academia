export default class AdminAlredyExistsError extends Error {

    constructor(message = 'El usuario administrador ya existe') {
        super(message);

        this.name = 'AdminAlredyExitsError';
        this.statusCode = 409;
    }
}
