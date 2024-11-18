import { validarParcialmenteUsuario, validarUsuario } from "../../schemas/usuario.js"

export class MovieController {

    constructor({ userModel }) {
        this.userModel = userModel
    }

    create = async (req, res) => {
        const result = validarUsuario(req.body)
        if (result.error) {
            return res.status(400).json({ error: JSON.parse(result.error.message) })
        }
        const newUser = await this.userModel.create({ input: result.data })
        res.status(201).json(newUser)
    }

    getByCorreo = async (req, res) => {
        const { correo } = req.params
        const user = await this.userModel.getByCorreo({ correo })
        if (user) return res.json(user)
        res.status(404).json({ message: 'No se encontro el usuario' })
    }

    deleteByCorreo = async (req, res) => {
        const { correo } = req.params
        const result = await this.correoModel.delete({ correo })
        if (result === false) {
            return res.status(404).json({ message: 'No se encontro el usuario' })
        }
        return res.json({ message: 'Usuario eliminado' })
    }

    updateByCorreo = async (req, res) => {
        const { correo } = req.params
        const result = validarParcialmenteUsuario(req.body)
        if (!result.success) {
            return res.status(400).json({ error: JSON.parse(result.error.message) })
        }
        const updatedUser = await this.userModel.update({ id, input: result.data })
        return res.json(updatedUser)

    }

}