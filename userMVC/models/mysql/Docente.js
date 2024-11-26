// userMVX/models/mysql/Docente.js


import mysql from 'mysql2/promise';
import { DEFAULT_CONFIG } from './ConfigDB.js';
import DBConnectionError from '../../errors/DBConnectionError.js';

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

export class DocenteModel {

    static async obtenerAcademias({ correo }) {
        try {
            const [academias] = await connection.query(
                `SELECT 
                    vap.id_academia_periodo AS id,
                    vap.nombre_academia AS academia,
                    vap.nombre_periodo AS periodo,
                    vap.nombre_coordinador AS coordinador
                FROM 
                    vista_academia_periodo AS vap
                INNER JOIN miembro AS m ON vap.id_academia_periodo = m.id_academia_periodo
                INNER JOIN usuario AS u ON m.id_usuario = u.id
                WHERE 
                    u.correo = ?;`,
                [correo])

            if (!academias || academias.length === 0) {
                return null
            }



            return academias
        } catch (e) {
            console.error(e)
            throw new DBConnectionError()
        }
    }

}