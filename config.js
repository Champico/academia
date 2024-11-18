// config.js

export const {
    PORT = 1234,
    SALT_ROUNDS = 10,
    SECRET_JWT_KEY = 'esta-es-mi-llave-secreta-pero--no-deben-ser-palabras-si-no-un-hash-dinamico'
} = process.env