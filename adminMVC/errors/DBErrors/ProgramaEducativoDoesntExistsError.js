export default class ProgramaEducativoDoesntExistsError extends Error {
    constructor(message = 'El programa educativo no existe') {
        super(message);

        this.name = 'ProgramaEducativoDoesntExistsError';
        this.statusCode = 404;
    }
}
