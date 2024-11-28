export default class ExperienciaEducativaDoesntExistsError extends Error {
    constructor(message = 'El nivel educativo no existe') {
        super(message);

        this.name = 'ExperienciaEducativaDoesntExistsError';
        this.statusCode = 404;
    }
}
