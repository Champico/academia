import mysql from 'mysql2/promise';
import { DEFAULT_CONFIG } from './ConfigDB.js';
import { DBCannotCreateError, AcademiaAlredyExistsError, NoDataToUpdateError, DBConnectionError, AcademiaDoesntExistsError, RegionDoesntExistsError, AreaAcademicaDoesntExistsError } from '../../errors/Error.js'

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

export class AcademiaModel {
    static async getAll() {
        try {
            const [academias] = await connection.query('SELECT * FROM academia;');
            if (academias.length === 0) return [];
            return academias;
        } catch (e) {
            console.log(e);
            return [];
        }
    }

    static async getById({ id }) {
        try {
            const [academia] = await connection.query('SELECT * FROM academia WHERE id = ?;', [id]);
            if (academia.length === 0) return null;
            return academia[0];
        } catch {
            return null;
        }
    }

    static async create({ input }) {
        const {
            codigo,
            nombre,
            id_facultad
        } = input;
        const codigoUpperCase = codigo.toUpperCase();

        let academiaEncontrada;
        try {
            const [academias] = await connection.query('SELECT codigo FROM academia WHERE codigo=?;', [codigoUpperCase]);
            academiaEncontrada = academias.length > 0;
        } catch {
            throw new DBConnectionError;
        }
        if (academiaEncontrada === true) throw new AcademiaAlredyExistsError;

        if (id_facultad) {
            let facultadEncontrada;
            try {
                const [facultades] = await connection.query('SELECT id FROM facultad WHERE id=?;', [id_facultad]);
                facultadEncontrada = facultades.length > 0;
            } catch {
                throw new DBConnectionError;
            }
            if (!facultadEncontrada) throw new FacultadDoesntExistsError;
        } else {
            id_facultad = null;
        }

        try {
            await connection.query(
                `INSERT INTO academia(codigo, nombre, id_facultad)
                VALUES (?,?,?,?);`,
                [codigoUpperCase, nombre, id_facultad]
            );
        } catch {
            throw new DBCannotCreateError('Error al crear la academia');
        }

        let academia;
        try {
            [academia] = await connection.query('SELECT * FROM academia WHERE codigo = ?;', [codigoUpperCase]);
        } catch {
            throw new DBConnectionError;
        }

        return academia;
    }

    static async delete({ id }) {
        try {
            const [result] = await connection.query('DELETE FROM academia WHERE id = ?;', [id]);
            const { affectedRows } = result;
            console.log(affectedRows);
            return affectedRows >= 1;
        } catch {
            return false;
        }
    }

    static async update({ id, input }) {

        // Verifica que exista la academia
        let academia;
        try {
            [academia] = await connection.query('SELECT id FROM academia WHERE id = ?;', [id]);
        } catch {
            throw new DBConnectionError;
        }
        if (academia.length === 0) throw new AcademiaDoesntExistsError;

        try {
            // Verifica que input tenga propiedades para actualizar
            if (!input || Object.keys(input).length === 0) {
                throw new NoDataToUpdateError;
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
            const query = `UPDATE academia SET ${fields.join(', ')} WHERE id = ?;`;

            // Ejecuta la consulta
            const [result] = await connection.query(query, values);

            const { affectedRows } = result;

            if (affectedRows === 0) {
                return false;
            }

            return true;

        } catch {
            throw new DBConnectionError;
        }
    }
}
