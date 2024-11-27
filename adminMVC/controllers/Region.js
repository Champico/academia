// adminMVC/controllers/Region.js

import { validarParcialmenteRegion, validarRegion } from "../../schemas/Region.js"

export class RegionController {

    constructor({ regionModel }) {
        this.regionModel = regionModel
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
        const regiones = await this.regionModel.getAll()
        res.status(200).json(regiones)
    }

    getById = async (req, res) => {
        const { id } = req.params
        if (!this.verifyIdNumeric({ id })) return res.status(400).json({ error: 'El id debe ser un número positivo' });

        try {
            const region = await this.regionModel.getById({ id })
            if (region) return res.status(200).json(region)
            res.status(404).json({ message: 'No se encontro la región' })
        } catch (error) {
            this.handleError(res, error, 'Error al obtener la región')
        }



    }

    create = async (req, res) => {
        const result = validarRegion(req.body)
        if (result.error) return res.status(400).json({ error: JSON.parse(result.error.message) })

        try {
            const newRegion = await this.regionModel.create({ input: result.data })
            res.status(201).json(newRegion)
        } catch (error) {
            this.handleError(res, error, 'Error al actualizar región')
        }
    }

    delete = async (req, res) => {
        const { id } = req.params
        if (!this.verifyIdNumeric({ id })) return res.status(400).json({ error: 'El id debe ser un número positivo' });

        try {
            const result = await this.regionModel.delete({ id })
            if (result === false) return res.status(404).json({ message: 'No se encontro la región' })
            return res.status(200).json({ message: 'Región eliminada' })
        } catch (error) {
            this.handleError(res, error, 'Error al actualizar región')
        }
    }

    update = async (req, res) => {
        const { id } = req.params;
        if (!this.verifyIdNumeric({ id })) return res.status(400).json({ error: 'El id debe ser un número positivo' });

        if (!req.body || Object.keys(req.body).length === 0) return res.status(400).json({ error: 'El cuerpo de la solicitud está vacío' });

        const result = validarParcialmenteRegion(req.body);
        if (!result.success || Object.keys(result.data).length === 0) {
            if (result.error) return res.status(400).json({ error: JSON.parse(result.error.message) })
            return res.status(400).json({ error: 'No se proporcionaron datos válidos' });
        }

        try {
            const updatedRegion = await this.regionModel.update({ id, input: result.data });
            if (!updatedRegion) return res.status(400).json({ message: 'No se pudo actualizar la región' });
            return res.status(200).json({ message: 'Región actualizada correctamente' });
        } catch (error) {
            this.handleError(res, error, 'Error al actualizar región')
        }
    }


}