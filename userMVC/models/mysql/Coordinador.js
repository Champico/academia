// userMVC/models/mysql/Coordinador.js

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

export class CoordinadorModel {

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

            const resultAcademia = await connection.query(`
                SELECT 
                    a.id,
                    a.nombre as academia,
                    a.codigo,
                    CONCAT(u.nombre,' ',u.paterno,' ',u.materno) as coordinador
                FROM 
                    academia a
                INNER JOIN coordinador c ON a.id = c.id_academia
                INNER JOIN usuario u ON c.id_usuario = u.id
                WHERE 
                    u.correo = ?;`,
                [correo])

            console.log(resultAcademia); // Para depurar y ver qué retorna la consulta

            const miAcademia = resultAcademia?.[0] || null;

            if ((!academias || academias.length === 0) && !miAcademia) {
                return null;
            }
            return {
                academias,
                miAcademia,
            };
        } catch (e) {
            console.error(e)
            throw new DBConnectionError()
        }
    }


}