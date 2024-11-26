// adminMVC/routes/userSessionRouter.js

import { Router } from 'express'
import { UserSessionController } from '../controllers/userSession.js'


export const createUserSessionRouter = ({ userModel }) => {
    const userRouter = Router()
    const userController = new UserController({ movieModel });

    moviesRouter.post('/login', UserSessionController.iniciarSesion)
    moviesRouter.post('/register', UserSessionController.registrar)
    moviesRouter.post('/logout', UserSessionController.cerrarSesion)
}

