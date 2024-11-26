// adminMVC/routes/MainUserRouter.js

import { Router } from 'express'
import { createUserSessionRouter } from './UserSession.js'
import { createUserOperationsRouter } from './UserOperations.js'
import { UserSessionModel } from '../models/mysql/UserSession.js'
import { DocenteModel } from '../models/mysql/Docente.js'
import { CoordinadorModel } from '../models/mysql/Coordinador.js'



export const createMainUserRouter = () => {
    const mainUserRouter = Router()

    mainUserRouter.use('/main', createUserOperationsRouter({ docenteModel: DocenteModel, coordinadorModel: CoordinadorModel }))
    mainUserRouter.use('/session', createUserSessionRouter({ userSessionModel: UserSessionModel }))

    //Por defecto
    mainUserRouter.use((req, res) => {
        res.status(404).send({ error: `Ruta no encontrada ${req.path} en mainuser` })
    })

    return mainUserRouter;
}




