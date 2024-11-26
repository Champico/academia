// adminMVC/routes/UsuarioRouter.js

import { Router } from 'express'
import { UsuarioController } from '../controllers/Usuario.js'


export const createUsuarioRouter = ({ usuarioModel }) => {
    const usuarioRouter = Router()
    const usuarioController = new UsuarioController({ usuarioModel });

    //Por defecto
    usuarioRouter.use((req, res) => {
        res.status(404).send({ error: `Ruta no encontrada` })
    })

    return usuarioRouter;
}