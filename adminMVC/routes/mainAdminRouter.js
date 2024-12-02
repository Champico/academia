// adminMVC/routes/mainAdminRouter.js

//Controlers
import { Router } from 'express'
import { createProgramaEducativoRouter } from './ProgramaEducativoRouter.js'
import { createAreaAcademicaRouter } from './AreaAcademicaRouter.js'
import { createRegionRouter } from './RegionRouter.js'
import { createFacultadRouter } from './FacultadRouter.js'
import { createAcademiaRouter } from './AcademiaRouter.js'
import { createUsuarioRouter } from './UsuarioRouter.js'
import { createAdminsRouter } from './AdminsRouter.js'
import { createPeriodoRouter } from './PeriodoRouter.js'
import { createPerAcaRouter } from './PerAcaRouter.js'
import { createNivelEducativoRouter } from './NivelEducativoRouter.js'
import { createExperienciaEducativaRouter } from './ExperienciaEducativaRouter.js'
import { createAdminSessionRouter } from './AdminSessionRouter.js'

//Modelo
import { AcademiaModel } from '../models/mysql/Academia.js'
import { AdminsModel } from '../models/mysql/Admins.js'
import { AreaAcademicaModel } from '../models/mysql/AreaAcademica.js'
import { FacultadModel } from '../models/mysql/Facultad.js'
import { PerAcaModel } from '../models/mysql/PerAca.js'
import { PeriodoModel } from '../models/mysql/Periodo.js'
import { ProgramaEducativoModel } from '../models/mysql/ProgramaEducativo.js'
import { RegionModel } from '../models/mysql/Region.js'
import { UsuarioModel } from '../models/mysql/Usuario.js'
import { ExperienciaEducativaModel } from '../models/mysql/ExperienciaEducativa.js'
import { NivelEducativoModel } from '../models/mysql/NivelEducativo.js'
import { AdminSessionModel } from '../models/mysql/AdminSession.js'


export const createMainAdminRouter = () => {
    const mainAdminRouter = Router()

    mainAdminRouter.use('/region', createRegionRouter({ regionModel: RegionModel })) //API Region
    mainAdminRouter.use('/areaAcademica', createAreaAcademicaRouter({ areaAcademicaModel: AreaAcademicaModel })) //API Area academica
    mainAdminRouter.use('/programaEducativo', createProgramaEducativoRouter({ programaEducativoModel: ProgramaEducativoModel })) //API Programas educativos
    mainAdminRouter.use('/nivelEducativo', createNivelEducativoRouter({ nivelEducativoModel: NivelEducativoModel })) //API nivel educativo
    mainAdminRouter.use('/facultad', createFacultadRouter({ facultadModel: FacultadModel })) //API Facultad
    mainAdminRouter.use('/academia', createAcademiaRouter({ academiaModel: AcademiaModel })) //API academia
    mainAdminRouter.use('/usuarios', createUsuarioRouter({ usuarioModel: UsuarioModel })) //API usuarios
    mainAdminRouter.use('/administradores', createAdminsRouter({ adminsModel: AdminsModel })) //API administradores
    mainAdminRouter.use('/periodo', createPeriodoRouter({ periodoModel: PeriodoModel })) //API periodo
    mainAdminRouter.use('/periodoAcademia', createPerAcaRouter({ perAcaModel: PerAcaModel })) //API periodo y academias
    mainAdminRouter.use('/experienciaEducativa', createExperienciaEducativaRouter({ experienciaEducativaModel: ExperienciaEducativaModel })) //API periodo y academias
    mainAdminRouter.use('/session', createAdminSessionRouter({ adminSessionModel: AdminSessionModel })) //API inicio sesion


    //Por defecto
    mainAdminRouter.use((req, res) => {
        res.status(404).send({ error: `Ruta no encontrada` })
    })

    return mainAdminRouter;
}
