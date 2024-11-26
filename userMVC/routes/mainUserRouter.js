// adminMVC/routes/MainUserRouter.js

import { Router } from 'express'
import { createUserSessionRouter } from './UserSession.js'
import { UserModel } from '../models/mysql/UserSession.js'




export const createMainUserRouter = () => {
    const mainUserRouter = Router()

    mainUserRouter.use('/user', createUserSessionRouter({ userModel: UserModel }))
}




