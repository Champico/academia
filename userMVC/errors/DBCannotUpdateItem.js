export default class DBCannotUpdateError extends Error {
    constructor(message = 'No se pudo actualizar el item') {
        super(message);

        this.name = 'DBCannotUpdateError';
        this.statusCode = 500;
    }
}
