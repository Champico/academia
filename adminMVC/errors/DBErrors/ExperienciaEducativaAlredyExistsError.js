export default class ExperienciaEducativaAlredyExistsError extends Error {
    constructor(message = 'La experiencia educativa ya existe') {
        super(message);

        this.name = 'ExperienciaEducativaAlredyExists';
        this.statusCode = 409;
    }
}
