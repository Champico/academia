// adminMVC/models/mysql/AreaAcademica.js

import mysql from 'mysql2/promise';
import { DEFAULT_CONFIG } from './ConfigDB.js';
import { DBCannotCreateError, AreaAcademicaAlredyExistsError, NoDataToUpdateError, DBConnectionError, AreaAcademicaDoesntExistsError } from '../../errors/Error.js'

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

export class AreaAcademicaModel {
    static async getAll() {
        try {
            const [areasAcademicas] = await connection.query('SELECT * FROM area_academica;')
            if (areasAcademicas.length === 0) return []
            return areasAcademicas
        } catch (e) {
            console.log(e)
            return []
        }
    }

    static async getById({ id }) {
        try {
            const [areaAcademica] = await connection.query('SELECT * FROM area_academica WHERE id = ?;', [id])
            if (areaAcademica.length === 0) return null
            return areaAcademica[0]
        } catch {
            return null
        }
    }

    static async create({ input }) {
        const {
            nombre
        } = input


        let encontrado
        try {
            const nombreRecibido = nombre.toLowerCase()
            const [areasAcademicas] = await connection.query('SELECT nombre FROM area_academica;')
            encontrado = areasAcademicas.some(areaAcademica => areaAcademica.nombre.toLowerCase() === nombreRecibido)
        } catch {
            throw new DBConnectionError
        }
        if (encontrado === true) throw new AreaAcademicaAlredyExistsError


        try {
            const result2 = await connection.query(
                `INSERT INTO area_academica(nombre) VALUES (?);`,
                [nombre]
            )
        } catch {
            throw new DBCannotCreateError('Error al crear el área académica')
        }


        let areaAcademica;
        try {
            [areaAcademica] = await connection.query('SELECT * FROM area_academica WHERE nombre = ?;', [nombre])
        } catch {
            throw new DBConnectionError
        }

        return areaAcademica
    }

    static async delete({ id }) {
        try {
            const [result] = await connection.query('DELETE FROM area_academica WHERE id = ?;', [id])
            const { affectedRows } = result
            console.log(affectedRows)
            return affectedRows >= 1;
        } catch {
            return false;
        }
    }

    static async update({ id, input }) {

        // Verifica que exista el área académica
        let areaAcademica;
        try {
            [areaAcademica] = await connection.query('SELECT id FROM area_academica WHERE id = ?;', [id])
        } catch {
            throw new DBConnectionError
        }
        if (areaAcademica.length === 0) throw new AreaAcademicaDoesntExistsError

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
            const query = `UPDATE area_academica SET ${fields.join(', ')} WHERE id = ?;`;

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
