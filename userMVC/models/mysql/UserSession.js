//  userMVC/models/mysql/UserSession.js

import mysql from 'mysql2/promise';
import { DEFAULT_CONFIG } from './ConfigDB.js';
import { SALT_ROUNDS } from '../../../config.js'
import { NotFoundError, DBCannotCreateError, UserAlredyExitsError, DBConnectionError, UserDoesntExitsError } from '../../errors/error.js';
import bcrypt from 'bcrypt'
import PasswordInvalidError from '../../errors/loginErrors/PasswordInvalidError.js';

const connectionString = process.env.DATABASE_UTL ?? DEFAULT_CONFIG;

let connection;

(async () => {
    try {
        connection = await mysql.createConnection(connectionString);
    } catch (error) {
        process.exit(1);
    }
})();

export class UserSessionModel {

    // : : : : : : :  L O G I N  : : : : : : : :
    static async login({ correo, clave }) {

        console.log("Correo y clave en el modelo UserSession: ", correo, " ", clave)

        let usuario;

        try {
            [usuario] = await connection.query(
                `SELECT correo, clave, nombre, paterno, materno, rol, id_facultad 
                 FROM usuario WHERE correo = ?;`,
                [correo]
            );
        } catch (e) {
            throw new DBConnectionError()
        }

        if (!usuario || usuario.length === 0) throw new UserDoesntExitsError()

        const isValid = await bcrypt.compareSync(clave, usuario[0].clave)
        if (!isValid) throw new PasswordInvalidError()

        const { clave: _, ...publicUser } = usuario[0]
        console.log(publicUser)

        return publicUser
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
        let result = null;

        try {
            [result] = await connection.query(
                `SELECT correo, nombre
                 FROM usuario WHERE correo = ?`,
                [correo]
            );

        } catch (e) {
            throw new DBConnectionError()
        }

        if (result.length > 0) throw new UserAlredyExitsError();

        //Verificar facultad
        if (idFacultad) {
            let result2 = null;

            try {
                [result2] = await connection.query(
                    `SELECT id FROM facultad WHERE id = ?`, [idFacultad]
                )
            } catch (e) {
                console.info("Error de la base de datos por: ", e)
                throw new DBConnectionError()
            }

            if (result2.length > 0) {
                idFacultad = result2[0].id;
            } else {
                throw new NotFoundError('Facultad no encontrada');
            }
        }

        //Crear contraseña

        const hashedPassword = await bcrypt.hash(clave, SALT_ROUNDS)

        // Crear usuario
        try {
            await connection.query(
                `INSERT INTO usuario (correo, clave, nombre, paterno, materno, rol, id_facultad)
                 VALUES (?, ?, ?, ?, ?, ?, ?)`,
                [correo, hashedPassword, nombre, paterno, materno, rol, idFacultad]
            );
        } catch {
            throw new DBCannotCreateError('No se puedo crear el usuario')
        }

        try {
            const [usuario] = await connection.query(
                `SELECT correo, nombre, paterno, materno, rol, id_facultad 
             FROM usuario WHERE correo = ?`,
                [correo]
            );
        } catch {
            throw new DBConnectionError
        }

        if (!usuario || usuario.length === 0) {
            throw new NotFoundError('Usuario no encontrado después de la creación');
        }

        return usuario[0];
    }


    static async getUserData({ correo }) {
        try {
            const [usuario] = await connection.query(
                `SELECT correo, nombre, paterno, materno, rol, id_facultad 
                 FROM usuario WHERE correo = ?`,
                [correo]
            );

            if (!usuario || usuario.length === 0) {
                throw new NotFoundError('Usuario no encontrado');
            }

            return usuario[0];

        } catch {
            throw new DBConnectionError
        }
    }

}
