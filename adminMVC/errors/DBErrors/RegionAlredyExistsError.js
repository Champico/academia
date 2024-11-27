export default class RegionAlredyExistsError extends Error {
    constructor(message = 'La región ya existe') {
        super(message);

        this.name = 'RegionAlredyExists';
        this.statusCode = 409;
    }
}
