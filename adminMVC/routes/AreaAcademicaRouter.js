// adminMVC/routes/AreaAcademicaRouter.js

import { Router } from 'express'
import { AreaAcademicaController } from '../controllers/AreaAcademica.js'


export const createAreaAcademicaRouter = ({ areaAcademicaModel }) => {
    const areaAcademicaRouter = Router()
    const areaAcademicaController = new AreaAcademicaController({ areaAcademicaModel });

    areaAcademicaRouter.get('/', areaAcademicaController.getAll)
    areaAcademicaRouter.get('/:id', areaAcademicaController.getById)
    areaAcademicaRouter.post('/', areaAcademicaController.create)
    areaAcademicaRouter.delete('/:id', areaAcademicaController.delete)
    areaAcademicaRouter.patch('/:id', areaAcademicaController.update)

    //Por defecto
    areaAcademicaRouter.use((req, res) => {
        res.status(404).send({ error: `Ruta no encontrada` })
    })

    return areaAcademicaRouter;
}