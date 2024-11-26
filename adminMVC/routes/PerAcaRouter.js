// adminMVC/routes/PerAcaRouter.js

import { Router } from 'express'
import { PerAcaController } from '../controllers/PerAca.js'


export const createPerAcaRouter = ({ perAcaModel }) => {
    const perAcaRouter = Router()
    const perAcaController = new PerAcaController({ perAcaModel });

    //Por defecto
    perAcaRouter.use((req, res) => {
        res.status(404).send({ error: `Ruta no encontrada` })
    })

    return perAcaRouter;
}
