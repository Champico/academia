export default class PeriodoDoesntExistsError extends Error {
    constructor(message = 'El período no existe') {
        super(message);

        this.name = 'PeriodoDoesntExistsError';
        this.statusCode = 404;
    }
}
