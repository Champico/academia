// app.js

// Importar dependencias
import express, { json } from 'express'
import { corsMiddleware } from './middlewares/corsMiddleware.js'
import { PORT } from './config.js'
import cookieParser from 'cookie-parser'
import { createMainUserRouter } from './userMVC/routes/mainUserRouter.js'
import { mainAdminRouter } from './adminMVC/routes/mainAdminRouter.js'

//Crear y exportar aplicación
export const app = express()

//Middlewares
app.disable('x-powered-by')
app.use(corsMiddleware())
app.use(json())
app.use(cookieParser())

//Accesible al usuario
app.use('/', createMainUserRouter)

//Accesible al administrador
app.use('/admin', mainAdminRouter)

//Escuchar peticiones
app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`)
})




