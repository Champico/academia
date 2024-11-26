import { SECRET_JWT_KEY } from '../../config.js'
import { validarUsuario } from '../../schemas/UserSession.js'
import { validarUsuarioDatos } from '../../schemas/Usuario.js'

export class UserSessionController {

    constructor({ userModel }) {
        this.userModel = userModel
    }

    iniciarSesion = async (req, res) => {
        const result = validarUsuario(req.body)
        const { correo, clave } = result

        try {
            const user = await UserModel.login({ correo, clave })
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
                    secure: process.env.NODE_ENV === 'production',
                    maxAge: 1000 * 60 * 60
                })
                .send({ user, token })

        } catch (error) {
            res.status(401).send({ error: JSON.parse(result.error.message) })
        }

    }

    registrar = async (req, res) => {
        const result = validarUsuarioDatos(req.body)
        console.log(req.body)

        if (result.error) {
            return res.status(400).json({ error: JSON.parse(result.error.message) })
        }

        try {
            const newUser = await this.userModel.register({ input: result.data })
            return res.status(201).json(newUser)
        } catch (error) {
            res.status(400).json({ error: JSON.parse(result.error.message) })
        }
    }

    cerrarSesion = async (req, res) => {
        res
            .clearCookie('access_token')
            .json({ message: 'Cierre de sesión correcto' })
    }

}