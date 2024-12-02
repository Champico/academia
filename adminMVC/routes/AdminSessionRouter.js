// adminMVC/routes/adminSessionRouter.js

import { Router } from 'express';
import { AdminSessionController } from '../controllers/AdminSession.js';

export const createAdminSessionRouter = ({ adminSessionModel }) => {
    const adminSessionRouter = Router();
    const adminSessionController = new AdminSessionController({ adminSessionModel });

    adminSessionRouter.post('/login', adminSessionController.iniciarSesion);
    adminSessionRouter.post('/register', adminSessionController.registrar);
    adminSessionRouter.post('/logout', adminSessionController.cerrarSesion);
    adminSessionRouter.get('/status', adminSessionController.verificarSesion);

    // Por defecto
    adminSessionRouter.use((req, res) => {
        res.status(404).send({ error: `Ruta no encontrada ${req.path} en adminsession` });
    });

    return adminSessionRouter;
};
