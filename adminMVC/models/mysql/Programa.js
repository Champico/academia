// adminMVC/models/mysql/Programa.js

import mysql from 'mysql2/promise';
import { DEFAULT_CONFIG } from './ConfigDB.js';

const connectionString = process.env.DATABASE_UTL ?? DEFAULT_CONFIG;

let connection;

(async () => {
    try {
        connection = await mysql.createConnection(connectionString);
    } catch (error) {
        console.error('Error al conectar a la base de datos: ', error);
        process.exit(1);
    }
})();

export class ProgramaModel {

}