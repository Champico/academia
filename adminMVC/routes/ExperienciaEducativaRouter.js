// adminMVC/routes/ExperienciaEducativaRouter.js

import { Router } from 'express'
import { ExperienciaEducativaController } from '../controllers/ExperienciaEducativa.js'


export const createExperienciaEducativaRouter = ({ experienciaEducativaModel }) => {
    const experienciaEducativaRouter = Router()
    const experienciaEducativaController = new ExperienciaEducativaController({ experienciaEducativaModel });

    experienciaEducativaRouter.get('/', experienciaEducativaController.getAll)
    experienciaEducativaRouter.get('/:id', experienciaEducativaController.getById)
    experienciaEducativaRouter.post('/', experienciaEducativaController.create)
    experienciaEducativaRouter.delete('/:id', experienciaEducativaController.delete)
    experienciaEducativaRouter.patch('/:id', experienciaEducativaController.update)

    //Por defecto
    experienciaEducativaRouter.use((req, res) => {
        res.status(404).send({ error: `Ruta no encontrada` })
    })

    return experienciaEducativaRouter;
}