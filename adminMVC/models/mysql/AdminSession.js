// src/adminMVC/models/mysql/AdminSession.js

import mysql from "mysql2/promise";
import { DEFAULT_CONFIG } from "./ConfigDB.js";
import { SALT_ROUNDS2 } from "../../../config.js";
import { NotFoundError, DBCannotCreateError, AdminAlredyExistsError, DBConnectionError, AdminDoesntExitsError } from "../../errors/Error.js";
import bcrypt from "bcrypt";
import PasswordInvalidError from "../../errors/loginErrors/PasswordInvalidError.js";

const connectionString = process.env.DATABASE_URL ?? DEFAULT_CONFIG;

let connection;

(async () => {
    try {
        connection = await mysql.createConnection(connectionString);
    } catch (error) {
        process.exit(1);
    }
})();

export class AdminSessionModel {
    // : : : : : : :  L O G I N  : : : : : : : :
    static async login({ correo, clave }) {
        console.log("Correo y clave en el modelo AdminSession: ", correo, " ", clave);

        let admin;

        try {
            [admin] = await connection.query(
                `SELECT correo, clave, nombre, paterno, materno, id_facultad 
         FROM administrador WHERE correo = ?;`,
                [correo]
            );
        } catch (e) {
            throw new DBConnectionError();
        }

        if (!admin || admin.length === 0) throw new AdminDoesntExistsError();

        const isValid = await bcrypt.compareSync(clave, admin[0].clave);
        if (!isValid) throw new PasswordInvalidError();

        const { clave: _, ...publicAdmin } = admin[0];
        console.log(publicAdmin);

        return publicAdmin;
    }

    // : : : : : R E G I S T E R : : : : : :
    static async register({ input }) {
        const { correo, clave, nombre, paterno, materno, idFacultad } = input;

        // Verificar si existe el admin
        let result = null;

        try {
            [result] = await connection.query(
                `SELECT correo, nombre
         FROM administrador WHERE correo = ?`,
                [correo]
            );
        } catch (e) {
            throw new DBConnectionError();
        }

        if (result.length > 0) throw new AdminAlredyExistsError();

        // Verificar facultad
        if (idFacultad) {
            let result2 = null;

            try {
                [result2] = await connection.query(
                    `SELECT id FROM facultad WHERE id = ?`,
                    [idFacultad]
                );
            } catch (e) {
                console.info("Error de la base de datos por: ", e);
                throw new DBConnectionError();
            }

            if (result2.length > 0) {
                idFacultad = result2[0].id;
            } else {
                throw new NotFoundError("Facultad no encontrada");
            }
        }

        // Crear contraseña
        const hashedPassword = await bcrypt.hash(clave, SALT_ROUNDS2);

        // Crear admin
        try {
            await connection.query(
                `INSERT INTO administrador (correo, clave, nombre, paterno, materno, id_facultad)
         VALUES (?, ?, ?, ?, ?, ?)`,
                [correo, hashedPassword, nombre, paterno, materno, idFacultad]
            );
        } catch {
            throw new DBCannotCreateError("No se pudo crear el admin");
        }

        try {
            const [admin] = await connection.query(
                `SELECT correo, nombre, paterno, materno, id_facultad 
         FROM administrador WHERE correo = ?`,
                [correo]
            );

            if (!admin || admin.length === 0) {
                throw new NotFoundError("Admin no encontrado después de la creación");
            }

            return admin[0];
        } catch {
            throw new DBConnectionError();
        }
    }

    static async getAdminData({ correo }) {
        try {
            const [admin] = await connection.query(
                `SELECT correo, nombre, paterno, materno, id_facultad 
         FROM administrador WHERE correo = ?`,
                [correo]
            );

            if (!admin || admin.length === 0) {
                throw new NotFoundError("Admin no encontrado");
            }

            return admin[0];
        } catch {
            throw new DBConnectionError();
        }
    }
}
