export default class FacultadDoesntExistsError extends Error {
    constructor(message = 'La facultad no existe') {
        super(message);

        this.name = 'FacultadDoesntExistsError';
        this.statusCode = 404;
    }
}
