export default class ProgramaEducativoAlredyExistsError extends Error {
    constructor(message = 'El programa educativo ya existe') {
        super(message);

        this.name = 'ProgramaEducativoAlredyExists';
        this.statusCode = 409;
    }
}
