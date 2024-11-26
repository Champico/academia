export default class DBConnectionError extends Error {
    constructor(message = 'Error al conectar con la base de datos') {
        super(message);

        this.name = 'DBConnectionError';
        this.statusCode = 500;
    }
}
