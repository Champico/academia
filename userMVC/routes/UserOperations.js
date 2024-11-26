// adminMVC/routes/userOperationRouter.js

import { Router } from 'express'
import { UserOperationsController } from '../controllers/UserOperations.js'


export const createUserOperationsRouter = ({ docenteModel, coordinadorModel }) => {
    const userOperationsRouter = Router()
    const userOperationsController = new UserOperationsController({ docenteModel, coordinadorModel });

    userOperationsRouter.get('/', userOperationsController.obtenerInicio)
    userOperationsRouter.get('/:academiaId', userOperationsController.obtenerAcademia)

    //Por defecto
    userOperationsRouter.use((req, res) => {
        res.status(404).send({ error: `Ruta no encontrada ${req.path} en useroperation` })
    })

    return userOperationsRouter;
}
