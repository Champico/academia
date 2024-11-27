// adminMVC/routes/FacultadRouter.js

import { Router } from 'express'
import { FacultadController } from '../controllers/Facultad.js'


export const createFacultadRouter = ({ facultadModel }) => {
    const facultadRouter = Router()
    const facultadController = new FacultadController({ facultadModel });

    
    facultadRouter.get('/', facultadController.getAll)
    facultadRouter.get('/:id', facultadController.getById)
    facultadRouter.post('/', facultadController.create)
    facultadRouter.delete('/:id', facultadController.delete)
    facultadRouter.patch('/:id', facultadController.update)

    //Por defecto
    facultadRouter.use((req, res) => {
        res.status(404).send({ error: `Ruta no encontrada` })
    })

    return facultadRouter;
}