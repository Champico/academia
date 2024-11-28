// adminMVC/controllers/ProgramaEducativo.js

import { validarParcialmenteProgramaEducativo, validarProgramaEducativo } from "../../schemas/ProgramaEducativo.js"

export class ProgramaEducativoController {

    constructor({ programaEducativoModel }) {
        this.programaEducativoModel = programaEducativoModel
    }

    //Handler que retorna mensaje de error enviado por el modelo
    handleError = (res, error, msg) => {
        if (error instanceof Error) return res.status(error.statusCode || 500).json({ error: error.message });
        return res.status(500).json({ error: msg });
    };

    //Midleware que retorna error si la id no es numerica
    verifyIdNumeric = ({ id }) => {
        const value = parseInt(id, 10);
        return Number.isInteger(value) && value >= 0;
    }

    getAll = async (req, res) => {
        const programasEducativos = await this.programaEducativoModel.getAll()
        res.status(200).json(programasEducativos)
    }

    getById = async (req, res) => {
        const { id } = req.params
        if (!this.verifyIdNumeric({ id })) return res.status(400).json({ error: 'El id debe ser un número positivo' });

        try {
            const programaEducativo = await this.programaEducativoModel.getById({ id })
            if (programaEducativo) return res.status(200).json(programaEducativo)
            res.status(404).json({ message: 'No se encontró el programa educativo' })
        } catch (error) {
            this.handleError(res, error, 'Error al obtener el programa educativo')
        }
    }

    create = async (req, res) => {
        const result = validarProgramaEducativo(req.body)
        if (result.error) return res.status(400).json({ error: JSON.parse(result.error.message) })

        try {
            const newProgramaEducativo = await this.programaEducativoModel.create({ input: result.data })
            res.status(201).json(newProgramaEducativo)
        } catch (error) {
            this.handleError(res, error, 'Error al crear el programa educativo')
        }
    }

    delete = async (req, res) => {
        const { id } = req.params
        if (!this.verifyIdNumeric({ id })) return res.status(400).json({ error: 'El id debe ser un número positivo' });

        try {
            const result = await this.programaEducativoModel.delete({ id })
            if (result === false) return res.status(404).json({ message: 'No se encontró el programa educativo' })
            return res.status(200).json({ message: 'Programa educativo eliminado' })
        } catch (error) {
            this.handleError(res, error, 'Error al eliminar el programa educativo')
        }
    }

    update = async (req, res) => {
        const { id } = req.params;
        if (!this.verifyIdNumeric({ id })) return res.status(400).json({ error: 'El id debe ser un número positivo' });

        if (!req.body || Object.keys(req.body).length === 0) return res.status(400).json({ error: 'El cuerpo de la solicitud está vacío' });

        const result = validarParcialmenteProgramaEducativo(req.body);
        if (!result.success || Object.keys(result.data).length === 0) {
            if (result.error) return res.status(400).json({ error: JSON.parse(result.error.message) })
            return res.status(400).json({ error: 'No se proporcionaron datos válidos' });
        }

        try {
            const updatedProgramaEducativo = await this.programaEducativoModel.update({ id, input: result.data });
            if (!updatedProgramaEducativo) return res.status(400).json({ message: 'No se pudo actualizar el programa educativo' });
            return res.status(200).json({ message: 'Programa educativo actualizado correctamente' });
        } catch (error) {
            this.handleError(res, error, 'Error al actualizar el programa educativo')
        }
    }
}
