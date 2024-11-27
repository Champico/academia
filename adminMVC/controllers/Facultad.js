// adminMVC/controllers/Facultad.js

import { validarParcialmenteFacultad, validarFacultad } from "../../schemas/Facultad.js"

export class FacultadController {

    constructor({ facultadModel }) {
        this.facultadModel = facultadModel
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
        const facultades = await this.facultadModel.getAll()
        res.status(200).json(facultades)
    }

    getById = async (req, res) => {
        const { id } = req.params
        if (!this.verifyIdNumeric({ id })) return res.status(400).json({ error: 'El id debe ser un número positivo' });

        try {
            const facultad = await this.facultadModel.getById({ id })
            if (facultad) return res.status(200).json(facultad)
            res.status(404).json({ message: 'No se encontró la facultad' })
        } catch (error) {
            this.handleError(res, error, 'Error al obtener la facultad')
        }
    }

    create = async (req, res) => {
        const result = validarFacultad(req.body)
        if (result.error) return res.status(400).json({ error: JSON.parse(result.error.message) })

        try {
            const newFacultad = await this.facultadModel.create({ input: result.data })
            res.status(201).json(newFacultad)
        } catch (error) {
            this.handleError(res, error, 'Error al actualizar facultad')
        }
    }

    delete = async (req, res) => {
        const { id } = req.params
        if (!this.verifyIdNumeric({ id })) return res.status(400).json({ error: 'El id debe ser un número positivo' });

        try {
            const result = await this.facultadModel.delete({ id })
            if (result === false) return res.status(404).json({ message: 'No se encontró la facultad' })
            return res.status(200).json({ message: 'Facultad eliminada' })
        } catch (error) {
            this.handleError(res, error, 'Error al actualizar facultad')
        }
    }

    update = async (req, res) => {
        const { id } = req.params;
        if (!this.verifyIdNumeric({ id })) return res.status(400).json({ error: 'El id debe ser un número positivo' });

        if (!req.body || Object.keys(req.body).length === 0) return res.status(400).json({ error: 'El cuerpo de la solicitud está vacío' });

        const result = validarParcialmenteFacultad(req.body);
        if (!result.success || Object.keys(result.data).length === 0) {
            if (result.error) return res.status(400).json({ error: JSON.parse(result.error.message) })
            return res.status(400).json({ error: 'No se proporcionaron datos válidos' });
        }

        try {
            const updatedFacultad = await this.facultadModel.update({ id, input: result.data });
            if (!updatedFacultad) return res.status(400).json({ message: 'No se pudo actualizar la facultad' });
            return res.status(200).json({ message: 'Facultad actualizada correctamente' });
        } catch (error) {
            this.handleError(res, error, 'Error al actualizar facultad')
        }
    }
}
