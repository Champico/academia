// adminMVC/routes/FacultadRouter.js

import { Router } from 'express'
import { FacultadController } from '../controllers/Facultad.js'


export const createFacultadRouter = ({ facultadModel }) => {
    const facultadRouter = Router()
    const facultadController = new FacultadController({ facultadModel });

    //Por defecto
    facultadRouter.use((req, res) => {
        res.status(404).send({ error: `Ruta no encontrada` })
    })

    return facultadRouter;
}