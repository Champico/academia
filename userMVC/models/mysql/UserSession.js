//  userMVC/models/mysql/UserSession.js

import mysql from 'mysql2/promise';
import { DEFAULT_CONFIG } from './ConfigDB.js';
import { NotFoundError, DBCannotCreateError, UserAlredyExitsError, DBConnectionError } from '../../errors/error.js';

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

export class UserModel {

    // : : : : : : :  L O G I N  : : : : : : : :
    static async login({ correo, clave }) {
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



    // : : : : : R E G I S T E R : : : : : :
    static async register({ input }) {
        const {
            correo,
            clave,
            nombre,
            paterno,
            materno,
            rol,
            idFacultad
        } = input;


        //Verificar si existe el usuario
        try {
            const [usuario] = await connection.query(
                `SELECT correo, nombre
                 FROM usuario WHERE correo = ?`,
                [correo]
            );

            if (usuario) {
                throw new UserAlredyExitsError()
            }
        } catch {
            console.log(error)
            throw new DBConnectionError()
        }


        // Verificar si existe facultad (si lo mando)
        if (idFacultad !== null) {
            try {
                const [result] = await connection.query(
                    `SELECT id FROM facultad WHERE id = ?`, [idFacultad]
                );
                if (result.length > 0) {
                    idFacultad = result[0].id;
                } else {
                    throw new NotFoundError('Facultad no encontrada');
                }
            } catch (e) {
                console.error(e);
                throw new NotFoundError('No se encuentra la facultad')
            }
        }

        //Crear contraseña
        const id = crypto.randomUUID()
        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS)

        // Crear usuario
        try {
            await connection.query(
                `INSERT INTO usuario (correo, clave, nombre, paterno, materno, rol, id_facultad)
                 VALUES (?, ?, ?, ?, ?, ?, ?)`,
                [correo, hashedPassword, nombre, paterno, materno, rol, idFacultad]
            );
        } catch (e) {
            console.error(e);
            throw new DBCannotCreateError('Error al crear usuario');
        }

        const [usuario] = await connection.query(
            `SELECT id, correo, nombre, paterno, materno, rol, id_facultad 
             FROM usuario WHERE correo = ?`,
            [correo]
        );

        if (!usuario || usuario.length === 0) {
            throw new NotFoundError('Usuario no encontrado después de la creación');
        }

        return usuario[0];
    }

}
