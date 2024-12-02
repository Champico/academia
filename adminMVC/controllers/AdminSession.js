// adminMVC/controllers/AdminSession.js

import { SECRET_JWT_KEY } from '../../config.js';
import { validarAdministrador } from '../../schemas/AdminSession.js';
import { validarAdministradorDatos } from '../../schemas/Administrador.js';
import jwt from 'jsonwebtoken';

export class AdminSessionController {
    constructor({ adminSessionModel }) {
        this.adminSessionModel = adminSessionModel;
    }

    handleError = (res, error, msg) => {
        if (error instanceof Error) {
            return res.status(error.statusCode || 500).json({ error: error.message });
        }
        return res.status(500).json({ error: msg });
    };

    iniciarSesion = async (req, res) => {
        if (!req.body) {
            res.status(400).json({ msg: "Correo y contraseña obligatorios" });
        }
        const result = validarAdministrador(req.body);

        if (!result.success) {
            if (result.error) {
                const firstError = result.error.issues[0]?.message;
                return res.status(400).json({ error: firstError, status: 'Error 400' });
            } else {
                return res.status(400).json({ error: "Datos ingresados incorrectos" });
            }
        }

        const { correo, clave } = result.data;

        try {
            const admin = await this.adminSessionModel.login({ correo, clave });
            if (!admin) {
                res.status(404).json({ error: "No existe el administrador" });
            }

            const token = jwt.sign(
                {
                    id: admin.id,
                    correo: admin.correo,
                },
                SECRET_JWT_KEY,
                { expiresIn: '1h' }
            );

            res
                .cookie('access_token', token, {
                    httpOnly: true,
                    secure: false,
                    maxAge: 1000 * 60 * 60,
                    SameSite: 'Lax',
                })
                .send({ admin, token });
        } catch (error) {
            this.handleError(res, error, 'Error al iniciar sesión como administrador');
        }
    };

    registrar = async (req, res) => {
        const result = validarAdministradorDatos(req.body);
        console.log(req.body);
        console.log(result);

        if (result.error) {
            const firstError = result.error.issues[0]?.message;
            return res.status(400).json({ error: firstError, status: 'Error 400' });
        }

        try {
            const newAdmin = await this.adminSessionModel.register({ input: result.data });
            return res.status(201).json(newAdmin);
        } catch (error) {
            this.handleError(res, error, 'Error al crear el administrador');
        }
    };

    cerrarSesion = async (req, res) => {
        res.clearCookie('access_token').json({ message: 'Cierre de sesión correcto' });
    };

    verificarSesion = async (req, res) => {
        const { admin } = req.session;
        if (!admin) {
            return res.status(200).json({ message: 'No ha iniciado sesión' });
        }

        const correo = admin.correo;
        if (correo) {
            try {
                const administradorData = await this.adminSessionModel.getAdminData({ correo });
                console.log(administradorData);
                res.status(200).json(administradorData);
            } catch (error) {
                this.handleError(res, error, 'Error al obtener los datos del administrador');
            }
        } else {
            res.clearCookie('access_token')
                .status(200)
                .json({ message: 'Un evento ha provocado el cierre de sesión' });
        }
    };
}
