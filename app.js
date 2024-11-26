// app.js

// Importar dependencias
import express, { json } from 'express'
import { corsMiddleware } from './middlewares/corsMiddleware.js'
import { PORT } from './config.js'
import cookieParser from 'cookie-parser'
import { createMainUserRouter } from './userMVC/routes/mainUserRouter.js'
import { mainAdminRouter } from './adminMVC/routes/mainAdminRouter.js'
import dotenv from 'dotenv';
import { authMiddleware } from './middlewares/authMiddleware.js'
import { jsonErrorMiddleware } from './middlewares/jsonErrorMiddleware.js'

//Variables de entorno
dotenv.config();

//Crear y exportar aplicación
export const app = express()

//Middlewares
//app.use(corsMiddleware())
app.use(corsMiddleware())
app.disable('x-powered-by')
app.use(json())
app.use(jsonErrorMiddleware)
app.use(cookieParser())
app.use(authMiddleware)


//Accesible al usuario
app.use('/user', createMainUserRouter())

//Accesible al administrador
app.use('/admin', mainAdminRouter)

//Por defecto
app.use((req, res) => {
    res.status(404).send({ error: 'Ruta no encontrada' })
})

//Escuchar peticiones
app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`)
})




