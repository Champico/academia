class EmptyParametersError extends Error {
    constructor(message = 'No se ingresarón datos') {
        super(message);

        this.name = 'EmptyParametersError';
        this.statusCode = 500;
    }
}

module.exports = EmptyParametersError;
