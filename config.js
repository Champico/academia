// config.js

export const {
    PORT = 1235,
    SALT_ROUNDS = 10,
    SALT_ROUNDS2 = 11,
    SECRET_JWT_KEY = 'esta-es-mi-llave-secreta-pero--no-deben-ser-palabras-si-no-un-hash-dinamico'
} = process.env