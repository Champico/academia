// adminMVC/controllers/NivelEducativo.js

import { validarParcialmenteNivelEducativo, validarNivelEducativo } from "../../schemas/NivelEducativo.js"

export class NivelEducativoController {

    constructor({ nivelEducativoModel }) {
        this.nivelEducativoModel = nivelEducativoModel
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
        const nivelesEducativos = await this.nivelEducativoModel.getAll()
        res.status(200).json(nivelesEducativos)
    }

    getById = async (req, res) => {
        const { id } = req.params
        if (!this.verifyIdNumeric({ id })) return res.status(400).json({ error: 'El id debe ser un número positivo' });

        try {
            const nivelEducativo = await this.nivelEducativoModel.getById({ id })
            if (nivelEducativo) return res.status(200).json(nivelEducativo)
            res.status(404).json({ message: 'No se encontró el nivel educativo' })
        } catch (error) {
            this.handleError(res, error, 'Error al obtener el nivel educativo')
        }
    }

    create = async (req, res) => {
        const result = validarNivelEducativo(req.body)
        if (result.error) return res.status(400).json({ error: JSON.parse(result.error.message) })

        try {
            const newNivelEducativo = await this.nivelEducativoModel.create({ input: result.data })
            res.status(201).json(newNivelEducativo)
        } catch (error) {
            this.handleError(res, error, 'Error al crear el nivel educativo')
        }
    }

    delete = async (req, res) => {
        const { id } = req.params
        if (!this.verifyIdNumeric({ id })) return res.status(400).json({ error: 'El id debe ser un número positivo' });

        try {
            const result = await this.nivelEducativoModel.delete({ id })
            if (result === false) return res.status(404).json({ message: 'No se encontró el nivel educativo' })
            return res.status(200).json({ message: 'Nivel educativo eliminado' })
        } catch (error) {
            this.handleError(res, error, 'Error al eliminar el nivel educativo')
        }
    }

    update = async (req, res) => {
        const { id } = req.params;
        if (!this.verifyIdNumeric({ id })) return res.status(400).json({ error: 'El id debe ser un número positivo' });

        if (!req.body || Object.keys(req.body).length === 0) return res.status(400).json({ error: 'El cuerpo de la solicitud está vacío' });

        const result = validarParcialmenteNivelEducativo(req.body);
        if (!result.success || Object.keys(result.data).length === 0) {
            if (result.error) return res.status(400).json({ error: JSON.parse(result.error.message) })
            return res.status(400).json({ error: 'No se proporcionaron datos válidos' });
        }

        try {
            const updatedNivelEducativo = await this.nivelEducativoModel.update({ id, input: result.data });
            if (!updatedNivelEducativo) return res.status(400).json({ message: 'No se pudo actualizar el nivel educativo' });
            return res.status(200).json({ message: 'Nivel educativo actualizado correctamente' });
        } catch (error) {
            this.handleError(res, error, 'Error al actualizar el nivel educativo')
        }
    }
}
