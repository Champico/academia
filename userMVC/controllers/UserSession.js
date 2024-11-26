// userMVC/controllers/UserSession.js

import { SECRET_JWT_KEY } from '../../config.js'
import { validarParcialmenteUsuario } from '../../schemas/UserSession.js'
import { validarUsuarioDatos } from '../../schemas/Usuario.js'
import jwt from 'jsonwebtoken'

export class UserSessionController {

    constructor({ userSessionModel }) {
        this.userSessionModel = userSessionModel
    }

    iniciarSesion = async (req, res) => {
        const result = validarParcialmenteUsuario(req.body)
        const { correo, clave } = result.data

        if (!result.succes) {
            if (result.error) {
                const firstError = result.error.issues[0]?.message;
                return res.status(400).json({ error: firstError, status: 'Error 400' });
            }
        }

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
            if (error instanceof Error) {
                return res.status(500).json({ error: error.message });
            } else {
                return res.status(500).json({ error: "Error al iniciar sesion" });
            }
        }

    }

    registrar = async (req, res) => {

        const result = validarUsuarioDatos(req.body);
        console.log(req.body);
        console.log(result)

        if (!result.succes) {
            if (result.error) {
                const firstError = result.error.issues[0]?.message;
                const secondError = result.error.issues[1]?.message;
                return res.status(400).json({ error: firstError, status: 'Error 400' });
            }
        }

        try {
            const newUser = await this.userSessionModel.register({ input: result.data });
            return res.status(201).json(newUser);
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ error: error.message });
            } else {
                return res.status(400).json({ error: "Error al registrar el usuario" });
            }
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

        res.status(200).json({ message: 'Correcto' })
    }

}