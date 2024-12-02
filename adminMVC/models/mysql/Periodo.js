// adminMVC/models/mysql/Periodo.js

import mysql from 'mysql2/promise';
import { DEFAULT_CONFIG } from './ConfigDB.js';
import { DBCannotCreateError, PeriodoAlredyExistsError, NoDataToUpdateError, DBConnectionError, PeriodoDoesntExistsError, RegionDoesntExistsError, AreaAcademicaDoesntExistsError } from '../../errors/Error.js'

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

export class PeriodoModel {
    static async getAll() {
        try {
            const [periodos] = await connection.query('SELECT * FROM periodo;')
            if (periodos.length === 0) return []
            return periodos
        } catch (e) {
            console.log(e)
            return []
        }
    }

    static async getById({ id }) {
        try {
            const [periodo] = await connection.query('SELECT * FROM periodo WHERE id = ?;', [id])
            if (periodo.length === 0) return null
            return periodo[0]
        } catch {
            return null
        }
    }

    static async create({ input }) {
        const {
            nombre,
            fecha_inicio,
            fecha_termino
        } = input

        let periodoEncontrado
        try {
            const [periodos] = await connection.query('SELECT nombre FROM periodo WHERE nombre=?;', [nombre])
            periodoEncontrado = periodos.length > 0;
        } catch {
            throw new DBConnectionError
        }
        if (periodoEncontrado === true) throw new PeriodoAlredyExistsError

        try {
            const result2 = await connection.query(
                `INSERT INTO periodo(nombre, fecha_inicio, fecha_termino)
                VALUES (?,?,?);`,
                [nombre, fecha_inicio, fecha_termino]
            )
        } catch {
            throw new DBCannotCreateError('Error al crear el periodo')
        }

        let periodo;
        try {
            [periodo] = await connection.query('SELECT * FROM periodo WHERE codigo = ?;', [codigoUpperCase])
        } catch {
            throw new DBConnectionError
        }

        return periodo
    }

    static async delete({ id }) {
        try {
            const [result] = await connection.query('DELETE FROM periodo WHERE id = ?;', [id])
            const { affectedRows } = result
            console.log(affectedRows)
            return affectedRows >= 1;
        } catch {
            return false;
        }
    }

    static async update({ id, input }) {

        // Verifica que exista el periodo
        let periodo;
        try {
            [periodo] = await connection.query('SELECT id FROM periodo WHERE id = ?;', [id])
        } catch {
            throw new DBConnectionError
        }
        if (periodo.length === 0) throw new PeriodoDoesntExistsError

        try {
            // Verifica que input tenga propiedades para actualizar
            if (!input || Object.keys(input).length === 0) {
                throw new NoDataToUpdateError
            }

            // Construye los fragmentos de la consulta y los valores a actualizar
            const fields = [];
            const values = [];

            // Recorre las propiedades del objeto input y construye la consulta
            for (const [key, value] of Object.entries(input)) {
                fields.push(`${key} = ?`);
                values.push(value);
            }

            // Agrega el ID a los valores (para la cláusula WHERE)
            values.push(id);

            // Construye la consulta completa
            const query = `UPDATE periodo SET ${fields.join(', ')} WHERE id = ?;`;

            // Ejecuta la consulta
            const [result] = await connection.query(query, values);

            const { affectedRows } = result;

            if (affectedRows === 0) {
                return false;
            }

            return true;

        } catch {
            throw new DBConnectionError
        }
    }
}
