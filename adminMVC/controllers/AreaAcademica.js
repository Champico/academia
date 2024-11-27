// adminMVC/controllers/AreaAcademica.js

import { validarParcialmenteAreaAcademica, validarAreaAcademica } from "../../schemas/AreaAcademica.js"

export class AreaAcademicaController {

    constructor({ areaAcademicaModel }) {
        this.areaAcademicaModel = areaAcademicaModel
    }

    // Handler que retorna mensaje de error enviado por el modelo
    handleError = (res, error, msg) => {
        if (error instanceof Error) return res.status(error.statusCode || 500).json({ error: error.message });
        return res.status(500).json({ error: msg });
    };

    // Midleware que retorna error si la id no es numérica
    verifyIdNumeric = ({ id }) => {
        const value = parseInt(id, 10);
        return Number.isInteger(value) && value >= 0;
    }

    getAll = async (req, res) => {
        const areasAcademicas = await this.areaAcademicaModel.getAll()
        res.status(200).json(areasAcademicas)
    }

    getById = async (req, res) => {
        const { id } = req.params
        if (!this.verifyIdNumeric({ id })) return res.status(400).json({ error: 'El id debe ser un número positivo' });

        try {
            const areaAcademica = await this.areaAcademicaModel.getById({ id })
            if (areaAcademica) return res.status(200).json(areaAcademica)
            res.status(404).json({ message: 'No se encontró el área académica' })
        } catch (error) {
            this.handleError(res, error, 'Error al obtener el área académica')
        }
    }

    create = async (req, res) => {
        const result = validarAreaAcademica(req.body)
        if (result.error) return res.status(400).json({ error: JSON.parse(result.error.message) })

        try {
            const newAreaAcademica = await this.areaAcademicaModel.create({ input: result.data })
            res.status(201).json(newAreaAcademica)
        } catch (error) {
            this.handleError(res, error, 'Error al crear área académica')
        }
    }

    delete = async (req, res) => {
        const { id } = req.params
        if (!this.verifyIdNumeric({ id })) return res.status(400).json({ error: 'El id debe ser un número positivo' });

        try {
            const result = await this.areaAcademicaModel.delete({ id })
            if (result === false) return res.status(404).json({ message: 'No se encontró el área académica' })
            return res.status(200).json({ message: 'Área académica eliminada' })
        } catch (error) {
            this.handleError(res, error, 'Error al eliminar área académica')
        }
    }

    update = async (req, res) => {
        const { id } = req.params;
        if (!this.verifyIdNumeric({ id })) return res.status(400).json({ error: 'El id debe ser un número positivo' });

        if (!req.body || Object.keys(req.body).length === 0) return res.status(400).json({ error: 'El cuerpo de la solicitud está vacío' });

        const result = validarParcialmenteAreaAcademica(req.body);
        if (!result.success || Object.keys(result.data).length === 0) {
            if (result.error) return res.status(400).json({ error: JSON.parse(result.error.message) })
            return res.status(400).json({ error: 'No se proporcionaron datos válidos' });
        }

        try {
            const updatedAreaAcademica = await this.areaAcademicaModel.update({ id, input: result.data });
            if (!updatedAreaAcademica) return res.status(400).json({ message: 'No se pudo actualizar el área académica' });
            return res.status(200).json({ message: 'Área académica actualizada correctamente' });
        } catch (error) {
            this.handleError(res, error, 'Error al actualizar área académica')
        }
    }
}
