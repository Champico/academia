// adminMVC/controllers/ExperienciaEducativa.js

import { validarParcialmenteExperienciaEducativa, validarExperienciaEducativa } from "../../schemas/ExperienciaEducativa.js"

export class ExperienciaEducativaController {

    constructor({ experienciaEducativaModel }) {
        this.experienciaEducativaModel = experienciaEducativaModel
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
        const experienciasEducativas = await this.experienciaEducativaModel.getAll()
        res.status(200).json(experienciasEducativas)
    }

    getById = async (req, res) => {
        const { id } = req.params
        if (!this.verifyIdNumeric({ id })) return res.status(400).json({ error: 'El id debe ser un número positivo' });

        try {
            const experienciaEducativa = await this.experienciaEducativaModel.getById({ id })
            if (experienciaEducativa) return res.status(200).json(experienciaEducativa)
            res.status(404).json({ message: 'No se encontró la experiencia educativa' })
        } catch (error) {
            this.handleError(res, error, 'Error al obtener la experiencia educativa')
        }
    }

    create = async (req, res) => {
        const result = validarExperienciaEducativa(req.body)
        if (result.error) return res.status(400).json({ error: JSON.parse(result.error.message) })

        try {
            const newExperienciaEducativa = await this.experienciaEducativaModel.create({ input: result.data })
            res.status(201).json(newExperienciaEducativa)
        } catch (error) {
            this.handleError(res, error, 'Error al actualizar experiencia educativa')
        }
    }

    delete = async (req, res) => {
        const { id } = req.params
        if (!this.verifyIdNumeric({ id })) return res.status(400).json({ error: 'El id debe ser un número positivo' });

        try {
            const result = await this.experienciaEducativaModel.delete({ id })
            if (result === false) return res.status(404).json({ message: 'No se encontró la experiencia educativa' })
            return res.status(200).json({ message: 'Experiencia educativa eliminada' })
        } catch (error) {
            this.handleError(res, error, 'Error al actualizar experiencia educativa')
        }
    }

    update = async (req, res) => {
        const { id } = req.params;
        if (!this.verifyIdNumeric({ id })) return res.status(400).json({ error: 'El id debe ser un número positivo' });

        if (!req.body || Object.keys(req.body).length === 0) return res.status(400).json({ error: 'El cuerpo de la solicitud está vacío' });

        const result = validarParcialmenteExperienciaEducativa(req.body);
        if (!result.success || Object.keys(result.data).length === 0) {
            if (result.error) return res.status(400).json({ error: JSON.parse(result.error.message) })
            return res.status(400).json({ error: 'No se proporcionaron datos válidos' });
        }

        try {
            const updatedExperienciaEducativa = await this.experienciaEducativaModel.update({ id, input: result.data });
            if (!updatedExperienciaEducativa) return res.status(400).json({ message: 'No se pudo actualizar la experiencia educativa' });
            return res.status(200).json({ message: 'Experiencia educativa actualizada correctamente' });
        } catch (error) {
            this.handleError(res, error, 'Error al actualizar experiencia educativa')
        }
    }
}
