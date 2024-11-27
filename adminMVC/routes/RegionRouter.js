// adminMVC/routes/RegionRouter.js

import { Router } from 'express'
import { RegionController } from '../controllers/Region.js'


export const createRegionRouter = ({ regionModel }) => {
    const regionRouter = Router()
    const regionController = new RegionController({ regionModel });

    regionRouter.get('/', regionController.getAll)
    regionRouter.get('/:id', regionController.getById)
    regionRouter.post('/', regionController.create)
    regionRouter.delete('/:id', regionController.delete)
    regionRouter.patch('/:id', regionController.update)

    regionRouter.use((req, res) => {
        res.status(404).send({ error: `Ruta no encontrada` })
    })

    return regionRouter;
}