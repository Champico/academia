// userMVC/controllers/UserSession.js

import { SECRET_JWT_KEY } from '../../config.js'
import { validarUsuario } from '../../schemas/UserSession.js'
import { validarUsuarioDatos } from '../../schemas/Usuario.js'
import jwt from 'jsonwebtoken'

export class UserSessionController {

    constructor({ userSessionModel }) {
        this.userSessionModel = userSessionModel
    }

    handleError = (res, error, msg) => {
        if (error instanceof Error) return res.status(error.statusCode || 500).json({ error: error.message });
        return res.status(500).json({ error: msg });
    };

    iniciarSesion = async (req, res) => {
        if (!req.body) res.status(400).json({ msg: "Correo y contraseña obligatorios" });
        const result = validarUsuario(req.body)

        if (!result.success) {
            if (result.error) {
                const firstError = result.error.issues[0]?.message;
                return res.status(400).json({ error: firstError, status: 'Error 400' });
            } else {
                return res.status(400).json({ error: "Datos ingresados incorrectos" });
            }
        }

        const { correo, clave } = result.data

        try {
            const user = await this.userSessionModel.login({ correo, clave })
            if (!user) res.status(404).json({ error: "No existe el usuario" });

            const token = jwt.sign({
                id: user.id,
                correo: user.correo,
                rol: user.rol
            },
                SECRET_JWT_KEY,
                { expiresIn: '1h' })

            res
                .cookie('access_token', token, {
                    httpOnly: true,
                    secure: false,
                    maxAge: 1000 * 60 * 60,
                    SameSite: 'Lax'
                })
                .send({ user, token })

        } catch (error) {
            this.handleError(res, error, 'Error al crear el usuario')
        }

    }

    registrar = async (req, res) => {
        const result = validarUsuarioDatos(req.body);
        console.log(req.body);
        console.log(result)

        if (result.error) {
            const firstError = result.error.issues[0]?.message;
            return res.status(400).json({ error: firstError, status: 'Error 400' });
        }

        try {
            const newUser = await this.userSessionModel.register({ input: result.data });
            return res.status(201).json(newUser);
        } catch (error) {
            this.handleError(res, error, 'Error al crear el usuario')
        }
    }


    cerrarSesion = async (req, res) => {
        res
            .clearCookie('access_token')
            .json({ message: 'Cierre de sesión correcto' })
    }


    verificarSesion = async (req, res) => {
        const { user } = req.session
        if (!user) return res.status(200).json({ message: 'No ha iniciado sesión' })

        const correo = user.correo
        if (correo) {
            try {
                const usuarioData = await this.userSessionModel.getUserData({ correo })
                console.log(usuarioData)
                res.status(200).json(usuarioData)
            } catch (error) {
                this.handleError(res, error, 'Error al obtener el usuario')
            }
        } else {
            res
                .clearCookie('access_token')
                .status(200)
                .json({ message: 'Un evento ha provocado el cierre de sesión' })
        }
    }

}