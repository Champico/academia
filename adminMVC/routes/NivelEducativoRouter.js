// adminMVC/routes/NivelEducativoRouter.js

import { Router } from 'express'
import { NivelEducativoController } from '../controllers/NivelEducativo.js'


export const createNivelEducativoRouter = ({ nivelEducativoModel }) => {
    const nivelEducativoRouter = Router()
    const nivelEducativoController = new NivelEducativoController({ nivelEducativoModel });

    nivelEducativoRouter.get('/', nivelEducativoController.getAll)
    nivelEducativoRouter.get('/:id', nivelEducativoController.getById)
    nivelEducativoRouter.post('/', nivelEducativoController.create)
    nivelEducativoRouter.delete('/:id', nivelEducativoController.delete)
    nivelEducativoRouter.patch('/:id', nivelEducativoController.update)

    //Por defecto
    nivelEducativoRouter.use((req, res) => {
        res.status(404).send({ error: `Ruta no encontrada` })
    })

    return nivelEducativoRouter;
}