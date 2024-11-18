class DBCannotCreateError extends Error {
    constructor(message = 'No se pudo actualizar el item') {
        super(message);

        this.name = 'DBCannotCreateError';
        this.statusCode = 500;
    }
}

module.exports = DBCannotCreateError;
