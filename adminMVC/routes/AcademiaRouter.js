// adminMVC/routes/AcademiaRouter.js

import { Router } from 'express'
import { AcademiaController } from '../controllers/Academia.js'


export const createAcademiaRouter = ({ academiaModel }) => {
    const academiaRouter = Router()
    const academiaController = new AcademiaController({ academiaModel });

    //Por defecto
    academiaRouter.use((req, res) => {
        res.status(404).send({ error: `Ruta no encontrada` })
    })

    return academiaRouter;
}