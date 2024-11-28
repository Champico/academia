// adminMVC/routes/ProgramaEducativoRouter.js

import { Router } from 'express'
import { ProgramaEducativoController } from '../controllers/ProgramaEducativo.js'

export const createProgramaEducativoRouter = ({ programaEducativoModel }) => {
    const programaEducativoRouter = Router()
    const programaEducativoController = new ProgramaEducativoController({ programaEducativoModel });

    programaEducativoRouter.get('/', programaEducativoController.getAll)
    programaEducativoRouter.get('/:id', programaEducativoController.getById)
    programaEducativoRouter.post('/', programaEducativoController.create)
    programaEducativoRouter.delete('/:id', programaEducativoController.delete)
    programaEducativoRouter.patch('/:id', programaEducativoController.update)

    //Por defecto
    programaEducativoRouter.use((req, res) => {
        res.status(404).send({ error: `Ruta no encontrada` })
    })

    return programaEducativoRouter;
}