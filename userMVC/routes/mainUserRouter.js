// adminMVC/routes/mainUserRouter.js

import { Router } from 'express'
import { createUserRouter } from './User'
import { userModel } from '../models/mysql/User.js'




export const createMainUserRouter = () => {
    const mainUserRouter = Router()

    mainUserRouter.use('/user', createUserRouter({ userModel }))
}




