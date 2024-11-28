// adminMVC/models/mysql/ExperienciaEducativa.js

import mysql from 'mysql2/promise';
import { DEFAULT_CONFIG } from './ConfigDB.js';
import { DBCannotCreateError, ExperienciaEducativaAlredyExistsError, NoDataToUpdateError, DBConnectionError, ExperienciaEducativaDoesntExistsError, RegionDoesntExistsError, AreaAcademicaDoesntExistsError } from '../../errors/Error.js'

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

export class ExperienciaEducativaModel {
    static async getAll() {
        try {
            const [experienciasEducativas] = await connection.query('SELECT * FROM experiencia_educativa;')
            if (experienciasEducativas.length === 0) return []
            return experienciasEducativas
        } catch (e) {
            console.log(e)
            return []
        }
    }

    static async getById({ id }) {
        try {
            const [experienciaEducativa] = await connection.query('SELECT * FROM experiencia_educativa WHERE id = ?;', [id])
            if (experienciaEducativa.length === 0) return null
            return experienciaEducativa[0]
        } catch {
            return null
        }
    }

    static async create({ input }) {
        const {
            codigo,
            nombre,
            id_programa,
            id_academia
        } = input
        const codigoUpperCase = codigo.toUpperCase()

        let experienciaEducativaEncontrada
        try {
            const [experienciasEducativas] = await connection.query('SELECT codigo FROM experiencia_educativa WHERE codigo=?;', [codigoUpperCase])
            experienciaEducativaEncontrada = experienciasEducativas.length > 0;
        } catch {
            throw new DBConnectionError
        }
        if (experienciaEducativaEncontrada === true) throw new ExperienciaEducativaAlredyExistsError

        if (id_programa) {
            let programaEducativoEncontrado
            try {
                const [programasEducativos] = await connection.query('SELECT id FROM programa_educativo WHERE id=?;', [id_programa])
                programaEducativoEncontrada = programasEducativos.length > 0;
            } catch {
                throw new DBConnectionError
            }
            if (programaEducativoEncontrado === true) throw new programaEducativoDoesntExistsError
        } else {
            id_programa = null;
        }

        if (id_academia) {
            let academiaEncontrada
            try {
                const [academias] = await connection.query('SELECT id FROM academia WHERE id=?;', [id_academia])
                academiaEncontrada = academias.length > 0;
            } catch {
                throw new DBConnectionError
            }
            if (academiaEncontrada === false) throw new academiaDoesntExistsError
        } else {
            id_academia = null;
        }

        try {
            const result2 = await connection.query(
                `INSERT INTO experiencia_educativa(codigo, nombre, id_programa, id_academia)
                VALUES (?,?,?,?);`,
                [codigoUpperCase, nombre, id_programa, id_academia]
            )
        } catch {
            throw new DBCannotCreateError('Error al crear la experiencia educativa')
        }

        let experienciaEducativa;
        try {
            [experienciaEducativa] = await connection.query('SELECT * FROM experiencia_educativa WHERE codigo = ?;', [codigoUpperCase])
        } catch {
            throw new DBConnectionError
        }

        return experienciaEducativa
    }

    static async delete({ id }) {
        try {
            const [result] = await connection.query('DELETE FROM experiencia_educativa WHERE id = ?;', [id])
            const { affectedRows } = result
            console.log(affectedRows)
            return affectedRows >= 1;
        } catch {
            return false;
        }
    }

    static async update({ id, input }) {

        // Verifica que exista la experiencia educativa
        let experienciaEducativa;
        try {
            [experienciaEducativa] = await connection.query('SELECT id FROM experiencia_educativa WHERE id = ?;', [id])
        } catch {
            throw new DBConnectionError
        }
        if (experienciaEducativa.length === 0) throw new ExperienciaEducativaDoesntExistsError

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
            const query = `UPDATE experiencia_educativa SET ${fields.join(', ')} WHERE id = ?;`;

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
