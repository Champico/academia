// adminMVC/routes/sessionRouter.js

import { Router } from 'express'
import { UserController } from '../controllers/User.js'


export const createUserRouter = ({ userModel }) => {
    const userRouter = Router()
    const userController = new UserController({ movieModel });

    moviesRouter.get('/:correo', userController.getByCorreo)
    moviesRouter.post('/', userController.create)
    moviesRouter.delete('/:correo', userController.deleteByCorreo)
    moviesRouter.patch('/:correo', userController.updateByCorreo)
}

