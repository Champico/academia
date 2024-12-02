export default class AcademiaAlredyExistsError extends Error {
    constructor(message = 'La academia ya existe') {
        super(message);

        this.name = 'AcademiaAlredyExists';
        this.statusCode = 409;
    }
}
