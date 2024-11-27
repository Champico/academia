export default class FacultadAlredyExistsError extends Error {
    constructor(message = 'La facultad ya existe') {
        super(message);

        this.name = 'FacultadAlredyExists';
        this.statusCode = 409;
    }
}
