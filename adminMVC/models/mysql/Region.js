// adminMVC/models/mysql/Region.js

import mysql from 'mysql2/promise';
import { DEFAULT_CONFIG } from './ConfigDB.js';
import { DBCannotCreateError, RegionAlredyExistsError, NoDataToUpdateError, DBConnectionError, RegionDoesntExistsError } from '../../errors/Error.js'

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

export class RegionModel {
    static async getAll() {
        try {
            const [regiones] = await connection.query('SELECT * FROM region;')
            if (regiones.length === 0) return []
            return regiones
        } catch (e) {
            console.log(e)
            return []
        }
    }

    static async getById({ id }) {
        try {
            const [region] = await connection.query('SELECT * FROM region WHERE id = ?;', [id])
            if (region.length === 0) return null
            return region[0]
        } catch {
            return null
        }
    }

    static async create({ input }) {
        const {
            nombre,
            direccion,
            colonia,
            codigo_postal,
            num_telefono,
            nombre_rector,
            es_vicerrectoria
        } = input


        let encontrado
        try {
            const nombreRecibido = nombre.toLowerCase()
            const [regiones] = await connection.query('SELECT nombre FROM region;')
            encontrado = regiones.some(region => region.nombre.toLowerCase() === nombreRecibido)
        } catch {
            throw new DBConnectionError
        }
        if (encontrado === true) throw new RegionAlredyExistsError


        try {
            const result2 = await connection.query(
                `INSERT INTO region(nombre, direccion, colonia, codigo_postal, num_telefono, nombre_rector, es_vicerrectoria)
                VALUES (?,?,?,?,?,?,?);`,
                [nombre, direccion, colonia, codigo_postal, num_telefono, nombre_rector, es_vicerrectoria]
            )
        } catch {
            throw new DBCannotCreateError('Error al crear la region')
        }


        let region;
        try {
            [region] = await connection.query('SELECT * FROM region WHERE nombre = ?;', [nombre])
        } catch {
            throw new DBConnectionError
        }

        return region
    }

    static async delete({ id }) {
        try {
            const [result] = await connection.query('DELETE FROM region WHERE id = ?;', [id])
            const { affectedRows } = result
            console.log(affectedRows)
            return affectedRows >= 1;
        } catch {
            return false;
        }
    }

    static async update({ id, input }) {

        //Verifica que exista la region
        let region;
        try {
            [region] = await connection.query('SELECT id FROM region WHERE id = ?;', [id])
        } catch {
            throw new DBConnectionError
        }
        if (region.length === 0) throw new RegionDoesntExistsError

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
            const query = `UPDATE region SET ${fields.join(', ')} WHERE id = ?;`;

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