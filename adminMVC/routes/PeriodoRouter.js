// adminMVC/routes/PeriodoRouter.js

import { Router } from 'express'
import { PeriodoController } from '../controllers/Periodo.js'

export const createPeriodoRouter = ({ periodoModel }) => {
    const periodoRouter = Router()
    const periodoController = new PeriodoController({ periodoModel });

    //Por defecto
    periodoRouter.use((req, res) => {
        res.status(404).send({ error: `Ruta no encontrada` })
    })

    return periodoRouter;
}