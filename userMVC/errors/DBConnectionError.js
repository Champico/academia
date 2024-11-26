export default class DBConnectionError extends Error {
    constructor(message = 'Error al obtener los datos') {
        super(message);

        this.name = 'DBConnectionError';
        this.statusCode = 500;
    }
}
