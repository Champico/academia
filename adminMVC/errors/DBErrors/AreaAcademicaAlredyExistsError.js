export default class AreaAcademicaAlredyExistsError extends Error {
    constructor(message = 'El área academia ya existe') {
        super(message);

        this.name = 'AreaAcademicaAlredyExists';
        this.statusCode = 409;
    }
}
