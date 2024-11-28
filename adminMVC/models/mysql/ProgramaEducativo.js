import mysql from 'mysql2/promise';
import { DEFAULT_CONFIG } from './ConfigDB.js';
import { DBCannotCreateError, ProgramaEducativoAlredyExistsError, NoDataToUpdateError, DBConnectionError, ProgramaEducativoDoesntExistsError, RegionDoesntExistsError, AreaAcademicaDoesntExistsError } from '../../errors/Error.js'

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

export class ProgramaEducativoModel {
    static async getAll() {
        try {
            const [programasEducativos] = await connection.query('SELECT * FROM programa_educativo;');
            if (programasEducativos.length === 0) return [];
            return programasEducativos;
        } catch (e) {
            console.log(e);
            return [];
        }
    }

    static async getById({ id }) {
        try {
            const [programaEducativo] = await connection.query('SELECT * FROM programa_educativo WHERE id = ?;', [id]);
            if (programaEducativo.length === 0) return null;
            return programaEducativo[0];
        } catch {
            return null;
        }
    }

    static async create({ input }) {
        const {
            codigo,
            nombre,
            id_facultad,
            id_nivel
        } = input;
        const codigoUpperCase = codigo.toUpperCase();

        let programaEducativoEncontrado;
        try {
            const [programasEducativos] = await connection.query('SELECT codigo FROM programa_educativo WHERE codigo=?;', [codigoUpperCase]);
            programaEducativoEncontrado = programasEducativos.length > 0;
        } catch {
            throw new DBConnectionError;
        }
        if (programaEducativoEncontrado === true) throw new ProgramaEducativoAlredyExistsError;

        if (id_nivel) {
            let nivelEducativoEncontrado;
            try {
                const [niveles] = await connection.query('SELECT id FROM nivel_educativo WHERE id=?;', [id_nivel]);
                nivelEducativoEncontrado = niveles.length > 0;
            } catch {
                throw new DBConnectionError;
            }
            if (nivelEducativoEncontrado === false) throw new NivelEducativoDoesntExistsError;
        } else {
            id_nivel = null;
        }

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
                `INSERT INTO programa_educativo(codigo, nombre, id_facultad, id_nivel)
                VALUES (?,?,?,?);`,
                [codigoUpperCase, nombre, id_facultad, id_nivel]
            );
        } catch {
            throw new DBCannotCreateError('Error al crear el programa educativo');
        }

        let programaEducativo;
        try {
            [programaEducativo] = await connection.query('SELECT * FROM programa_educativo WHERE codigo = ?;', [codigoUpperCase]);
        } catch {
            throw new DBConnectionError;
        }

        return programaEducativo;
    }

    static async delete({ id }) {
        try {
            const [result] = await connection.query('DELETE FROM programa_educativo WHERE id = ?;', [id]);
            const { affectedRows } = result;
            console.log(affectedRows);
            return affectedRows >= 1;
        } catch {
            return false;
        }
    }

    static async update({ id, input }) {

        // Verifica que exista el programa educativo
        let programaEducativo;
        try {
            [programaEducativo] = await connection.query('SELECT id FROM programa_educativo WHERE id = ?;', [id]);
        } catch {
            throw new DBConnectionError;
        }
        if (programaEducativo.length === 0) throw new ProgramaEducativoDoesntExistsError;

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
            const query = `UPDATE programa_educativo SET ${fields.join(', ')} WHERE id = ?;`;

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
