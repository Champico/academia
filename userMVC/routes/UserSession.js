// adminMVC/routes/userSessionRouter.js

import { Router } from 'express'
import { UserSessionController } from '../controllers/UserSession.js'


export const createUserSessionRouter = ({ userSessionModel }) => {
    const userSessionRouter = Router()
    const userSessionController = new UserSessionController({ userSessionModel });

    userSessionRouter.post('/login', userSessionController.iniciarSesion)
    userSessionRouter.post('/register', userSessionController.registrar)
    userSessionRouter.post('/logout', userSessionController.cerrarSesion)
    userSessionRouter.get('/status', userSessionController.verificarSesion)

    //Por defecto
    userSessionRouter.use((req, res) => {
        res.status(404).send({ error: `Ruta no encontrada ${req.path} en usersession` })
    })

    return userSessionRouter;
}

