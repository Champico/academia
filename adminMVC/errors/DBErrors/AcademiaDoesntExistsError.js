export default class AcademiaDoesntExistsError extends Error {
    constructor(message = 'La academia no existe') {
        super(message);

        this.name = 'AcademiaDoesntExistsError';
        this.statusCode = 404;
    }
}
