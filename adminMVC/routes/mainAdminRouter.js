// adminMVC/routes/mainAdminRouter.js

//Controlers
import { Router } from 'express'
import { createProgramaRouter } from './ProgramaRouter.js'
import { createAreaAcademicaRouter } from './AreaAcademicaRouter.js'
import { createRegionRouter } from './RegionRouter.js'
import { createFacultadRouter } from './FacultadRouter.js'
import { createAcademiaRouter } from './AcademiaRouter.js'
import { createUsuarioRouter } from './UsuarioRouter.js'
import { createAdminsRouter } from './AdminsRouter.js'
import { createPeriodoRouter } from './PeriodoRouter.js'
import { createPerAcaRouter } from './PerAcaRouter.js'

//Modelos

import { AcademiaModel } from '../models/mysql/Academia.js'
import { AdminsModel } from '../models/mysql/Admins.js'
import { AreaAcademicaModel } from '../models/mysql/AreaAcademica.js'
import { FacultadModel } from '../models/mysql/Facultad.js'
import { PerAcaModel } from '../models/mysql/PerAca.js'
import { PeriodoModel } from '../models/mysql/Periodo.js'
import { ProgramaModel } from '../models/mysql/Programa.js'
import { RegionModel } from '../models/mysql/Region.js'
import { UsuarioModel } from '../models/mysql/Usuario.js'

export const createMainAdminRouter = () => {
    const mainAdminRouter = Router()

    mainAdminRouter.use('/region', createRegionRouter({ regionModel: RegionModel })) //API Region
    mainAdminRouter.use('/areaAcademica', createAreaAcademicaRouter({ areaAcademicaModel: AreaAcademicaModel })) //API Area academica
    mainAdminRouter.use('/programa', createProgramaRouter({ programaModel: ProgramaModel })) //API Programas educativos
    mainAdminRouter.use('/facultad', createFacultadRouter({ facultadModel: FacultadModel })) //API Facultad
    mainAdminRouter.use('/academia', createAcademiaRouter({ academiaModel: AcademiaModel })) //API academia
    mainAdminRouter.use('/usuarios', createUsuarioRouter({ usuarioModel: UsuarioModel })) //API usuarios
    mainAdminRouter.use('/administradores', createAdminsRouter({ adminsModel: AdminsModel })) //API administradores
    mainAdminRouter.use('/periodo', createPeriodoRouter({ periodoModel: PeriodoModel })) //API periodo
    mainAdminRouter.use('/periodoAcademia', createPerAcaRouter({ perAcaModel: PerAcaModel })) //API periodo y academias


    //Por defecto
    mainAdminRouter.use((req, res) => {
        res.status(404).send({ error: `Ruta no encontrada` })
    })

    return mainAdminRouter;
}
