export default class PeriodoAlredyExistsError extends Error {
    constructor(message = 'El período ya existe') {
        super(message);

        this.name = 'PeriodoAlredyExists';
        this.statusCode = 409;
    }
}
