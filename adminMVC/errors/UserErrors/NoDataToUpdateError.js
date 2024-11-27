export default class NoDataToUpdateError extends Error {
    constructor(message = 'No hay datos para actualizar') {
        super(message);

        this.name = 'NoDataToUpdateError';
        this.statusCode = 409;
    }
}


