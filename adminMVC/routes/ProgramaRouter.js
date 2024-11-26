// adminMVC/routes/ProgramaRouter.js

import { Router } from 'express'
import { ProgramaController } from '../controllers/Programa.js'


export const createProgramaRouter = ({ programaModel }) => {
    const programaRouter = Router()
    const programaController = new ProgramaController({ programaModel });

    //Por defecto
    programaRouter.use((req, res) => {
        res.status(404).send({ error: `Ruta no encontrada` })
    })

    return programaRouter;
}