import mysql from 'mysql2/promise';
import { DEFAULT_CONFIG } from './config';
import NotFoundError from '../../errors/notFoundError';
import DBCannotCreateError from '../../errors/DBCannotCreateError';

const connectionString = process.env.DATABASE_UTL ?? DEFAULT_CONFIG;

let connection;

(async () => {
    try {
        connection = await mysql.createConnection(connectionString);
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
        process.exit(1);
    }
})();

export class UserModel {

    // Recibe un input y retorna el usuario creado
    static async createUser({ input }) {
        const {
            correo,
            clave,
            nombre,
            paterno,
            materno,
            rol,
            claveFacultad
        } = input;

        let idFacultad = null;

        // Verificar facultad
        if (claveFacultad !== null) {
            try {
                const [result] = await connection.query(
                    `SELECT id FROM facultad WHERE codigo = ?`, [claveFacultad]
                );
                if (result.length > 0) {
                    idFacultad = result[0].id;
                } else {
                    throw new NotFoundError('Facultad no encontrada');
                }
            } catch (e) {
                console.error(e);
                throw new NotFoundError('No se encuentra la facultad');
            }
        }

        // Crear usuario
        try {
            await connection.query(
                `INSERT INTO usuario (correo, clave, nombre, paterno, materno, rol, id_facultad)
                 VALUES (?, ?, ?, ?, ?, ?, ?)`,
                [correo, clave, nombre, paterno, materno, rol, idFacultad]
            );
        } catch (e) {
            console.error(e);
            throw new DBCannotCreateError('Error al crear usuario');
        }

        // Regresar usuario sin password
        const [usuario] = await connection.query(
            `SELECT correo, clave, nombre, paterno, materno, rol, id_facultad 
             FROM usuario WHERE correo = ?`,
            [correo]
        );

        if (!usuario || usuario.length === 0) {
            throw new NotFoundError('Usuario no encontrado después de la creación');
        }

        return usuario[0];
    }

    // Recibe un correo y regresa un usuario
    static async getByCorreo({ correo }) {
        const [usuario] = await connection.query(
            `SELECT correo, clave, nombre, paterno, materno, rol, id_facultad 
             FROM usuario WHERE correo = ?`,
            [correo]
        );

        if (!usuario || usuario.length === 0) {
            return null; // Si no existe el usuario
        }

        return usuario[0];
    }

    // Recibe un correo y regresa un booleano
    static async deleteByCorreo({ correo }) {
        try {
            const [result] = await connection.query(`DELETE FROM usuario WHERE correo = ?`, [correo]);
            const { affectedRows } = result;

            if (affectedRows >= 1) {
                return true;
            } else {
                return false; // No se encontró el usuario
            }
        } catch (e) {
            console.error(e);
            throw new DBCannotCreateError('Error al eliminar usuario');
        }
    }

    // Actualiza usuario por correo
    static async updateByCorreo({ correo, input }) {
        if (!input || Object.keys(input).length === 0) {
            throw new Error('No hay datos para actualizar.');
        }

        try {
            // Verifica si el usuario existe antes de intentar actualizar
            const [usuarioExistente] = await connection.query(
                `SELECT * FROM usuario WHERE correo = ?`, [correo]
            );

            if (!usuarioExistente || usuarioExistente.length === 0) {
                throw new NotFoundError('Usuario no encontrado para actualización');
            }

            // Construye los fragmentos de la consulta y los valores a actualizar
            const fields = [];
            const values = [];

            for (const [key, value] of Object.entries(input)) {
                fields.push(`${key} = ?`);
                values.push(value);
            }

            values.push(correo); // Agregar el correo al final para la cláusula WHERE

            const query = `UPDATE usuario SET ${fields.join(', ')} WHERE correo = ?`;

            const [result] = await connection.query(query, values);
            const { affectedRows } = result;

            if (affectedRows === 0) {
                return false;
            }

            console.log('Usuario actualizado correctamente.');
            return true;
        } catch (e) {
            console.error(e);
            throw new DBCannotCreateError('Error al actualizar el usuario');
        }
    }
}
