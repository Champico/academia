// adminMVC/routes/AdminsRouter.js

import { Router } from 'express'
import { AdminsController } from '../controllers/Admins.js'


export const createAdminsRouter = ({ adminsModel }) => {
    const adminsRouter = Router()
    const adminsController = new AdminsController({ adminsModel });

    //Por defecto
    adminsRouter.use((req, res) => {
        res.status(404).send({ error: `Ruta no encontrada` })
    })

    return adminsRouter;
}