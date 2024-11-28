export default class NivelEducativoAlredyExistsError extends Error {
    constructor(message = 'El nivel educativo ya existe') {
        super(message);

        this.name = 'NivelEducativoAlredyExists';
        this.statusCode = 409;
    }
}
