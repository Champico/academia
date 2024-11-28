// adminMVC/models/mysql/NivelEducativo.js

import mysql from 'mysql2/promise';
import { DEFAULT_CONFIG } from './ConfigDB.js';
import { DBCannotCreateError, NivelEducativoAlredyExistsError, NoDataToUpdateError, DBConnectionError, NivelEducativoDoesntExistsError } from '../../errors/Error.js'

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

export class NivelEducativoModel {
    static async getAll() {
        try {
            const [nivelesEducativos] = await connection.query('SELECT * FROM nivel_educativo;')
            if (nivelesEducativos.length === 0) return []
            return nivelesEducativos
        } catch (e) {
            console.log(e)
            return []
        }
    }

    static async getById({ id }) {
        try {
            const [nivelEducativo] = await connection.query('SELECT * FROM nivel_educativo WHERE id = ?;', [id])
            if (nivelEducativo.length === 0) return null
            return nivelEducativo[0]
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
            const [nivelesEducativos] = await connection.query('SELECT nombre FROM nivel_educativo;')
            encontrado = nivelesEducativos.some(nivelEducativo => nivelEducativo.nombre.toLowerCase() === nombreRecibido)
        } catch {
            throw new DBConnectionError
        }
        if (encontrado === true) throw new NivelEducativoAlredyExistsError


        try {
            const result2 = await connection.query(
                `INSERT INTO nivel_educativo(nombre)
                VALUES (?);`,
                [nombre]
            )
        } catch {
            throw new DBCannotCreateError('Error al crear el nivel educativo')
        }


        let nivelEducativo;
        try {
            [nivelEducativo] = await connection.query('SELECT * FROM nivel_educativo WHERE nombre = ?;', [nombre])
        } catch {
            throw new DBConnectionError
        }

        return nivelEducativo
    }

    static async delete({ id }) {
        try {
            const [result] = await connection.query('DELETE FROM nivel_educativo WHERE id = ?;', [id])
            const { affectedRows } = result
            console.log(affectedRows)
            return affectedRows >= 1;
        } catch {
            return false;
        }
    }

    static async update({ id, input }) {

        //Verifica que exista el nivel educativo
        let nivelEducativo;
        try {
            [nivelEducativo] = await connection.query('SELECT id FROM nivel_educativo WHERE id = ?;', [id])
        } catch {
            throw new DBConnectionError
        }
        if (nivelEducativo.length === 0) throw new NivelEducativoDoesntExistsError

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
            const query = `UPDATE nivel_educativo SET ${fields.join(', ')} WHERE id = ?;`;

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
