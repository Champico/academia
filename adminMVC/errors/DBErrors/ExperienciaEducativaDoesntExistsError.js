export default class ExperienciaEducativaDoesntExistsError extends Error {
    constructor(message = 'La experiencia educativa academica no existe') {
        super(message);

        this.name = 'ExperienciaEducativaDoesntExistsError';
        this.statusCode = 404;
    }
}
