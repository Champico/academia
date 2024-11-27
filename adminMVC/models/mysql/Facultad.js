// adminMVC/models/mysql/Facultad.js

import mysql from 'mysql2/promise';
import { DEFAULT_CONFIG } from './ConfigDB.js';
import { DBCannotCreateError, FacultadAlredyExistsError, NoDataToUpdateError, DBConnectionError, FacultadDoesntExistsError, RegionDoesntExistsError, AreaAcademicaDoesntExistsError } from '../../errors/Error.js'

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

export class FacultadModel {
    static async getAll() {
        try {
            const [facultades] = await connection.query('SELECT * FROM facultad;')
            if (facultades.length === 0) return []
            return facultades
        } catch (e) {
            console.log(e)
            return []
        }
    }

    static async getById({ id }) {
        try {
            const [facultad] = await connection.query('SELECT * FROM facultad WHERE id = ?;', [id])
            if (facultad.length === 0) return null
            return facultad[0]
        } catch {
            return null
        }
    }

    static async create({ input }) {
        const {
            codigo,
            nombre,
            direccion,
            colonia,
            codigo_postal,
            num_telefono,
            nombre_director,
            id_region,
            id_area,
        } = input
        const codigoUpperCase = codigo.toUpperCase()

        let facultadEncontrada
        try {
            const [facultades] = await connection.query('SELECT codigo FROM facultad WHERE codigo=?;', [codigoUpperCase])
            facultadEncontrada = facultades.length > 0;
        } catch {
            throw new DBConnectionError
        }
        if (facultadEncontrada === true) throw new FacultadAlredyExistsError



        if (id_region) {
            let regionEncontrada
            try {
                const [regiones] = await connection.query('SELECT id FROM region WHERE id=?;', [id_region])
                regionEncontrada = regiones.length > 0;
            } catch {
                throw new DBConnectionError
            }
            if (regionEncontrada === false) throw new RegionDoesntExistsError
        } else {
            id_region = 0;
        }

        if (id_area) {
            let areaAcademicaEncontrada
            try {
                const [areasAcademicas] = await connection.query('SELECT id FROM area_academica WHERE id=?;', [id_area])
                areaAcademicaEncontrada = areasAcademicas.length > 0;
            } catch {
                throw new DBConnectionError
            }
            if (areaAcademicaEncontrada === true) throw new AreaAcademicaDoesntExistsError
        } else {
            id_area = 0;
        }

        try {
            const result2 = await connection.query(
                `INSERT INTO facultad(codigo, nombre, direccion, colonia, codigo_postal, num_telefono, nombre_director)
                VALUES (?,?,?,?,?,?,?);`,
                [codigoUpperCase, nombre, direccion, colonia, codigo_postal, num_telefono, nombre_director]
            )
        } catch {
            throw new DBCannotCreateError('Error al crear la facultad')
        }

        let facultad;
        try {
            [facultad] = await connection.query('SELECT * FROM facultad WHERE codigo = ?;', [codigoUpperCase])
        } catch {
            throw new DBConnectionError
        }

        return facultad
    }

    static async delete({ id }) {
        try {
            const [result] = await connection.query('DELETE FROM facultad WHERE id = ?;', [id])
            const { affectedRows } = result
            console.log(affectedRows)
            return affectedRows >= 1;
        } catch {
            return false;
        }
    }

    static async update({ id, input }) {

        // Verifica que exista la facultad
        let facultad;
        try {
            [facultad] = await connection.query('SELECT id FROM facultad WHERE id = ?;', [id])
        } catch {
            throw new DBConnectionError
        }
        if (facultad.length === 0) throw new FacultadDoesntExistsError

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
            const query = `UPDATE facultad SET ${fields.join(', ')} WHERE id = ?;`;

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
