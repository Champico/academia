// userMVC/controllers/UserOperation.js

export class UserOperationsController {

    constructor({ docenteModel, coordinadorModel }) {
        this.docenteModel = docenteModel
        this.coordinadorModel = coordinadorModel
    }

    obtenerInicio = async (req, res) => {
        const { user } = req.session

        if (!user) return res.status(200).json({ message: 'No ha iniciado sesión' })

        const rol = user.rol
        const correo = user.correo

        let academias = null;

        if (rol === 'docente') {
            academias = await this.docenteModel.obtenerAcademias({ correo })
            if (!academias || academias.length === 0) return res.status(200).json({ message: 'No tiene academias' })
            return res.status(200).json({ academias })
        } else if (rol === 'coordinador') {
            academias = await this.coordinadorModel.obtenerAcademias({ correo })
            if (!academias) return res.status(200).json({ message: 'No tiene academias' })
            return res.status(200).json(academias)
        }



        res.status(200).json(academias)
    }

    obtenerAcademia = async (req, res) => {
        const { user } = req.session
        if (!user) return res.status(401).json({ message: 'No ha iniciado sesión', status: '401 No autorizado' })
    }

}