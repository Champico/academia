// adminMVC/routes/RegionRouter.js

import { Router } from 'express'
import { RegionController } from '../controllers/Region.js'


export const createRegionRouter = ({ regionModel }) => {
    const regionRouter = Router()
    const regionController = new RegionController({ regionModel });

    //Por defecto
    regionRouter.use((req, res) => {
        res.status(404).send({ error: `Ruta no encontrada` })
    })

    return regionRouter;
}