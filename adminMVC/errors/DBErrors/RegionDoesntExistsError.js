export default class RegionDoesntExistsError extends Error {
    constructor(message = 'La región no existe') {
        super(message);

        this.name = 'RegionDoesntExistsError';
        this.statusCode = 404;
    }
}
