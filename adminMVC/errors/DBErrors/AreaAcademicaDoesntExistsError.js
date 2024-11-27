export default class AreaAcademicaDoesntExistsError extends Error {
    constructor(message = 'El área academica no existe') {
        super(message);

        this.name = 'AreaAcademicaDoesntExistsError';
        this.statusCode = 404;
    }
}
