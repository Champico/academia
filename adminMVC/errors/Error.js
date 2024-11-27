// adminMVC/errors/Error.js

export { default as DBConnectionError } from './DBErrors/DBCannotCreateError.js';
export { default as RegionAlredyExistsError } from './DBErrors/RegionAlredyExistsError.js'
export { default as NoDataToUpdateError } from './UserErrors/NoDataToUpdateError.js'
export { default as RegionDoesntExistsError } from './DBErrors/RegionDoesntExistsError.js'
export { default as DBCannotCreateError } from './DBErrors/DBCannotCreateError.js'
export { default as FacultadAlredyExistsError } from './DBErrors/FacultadAlredyExistsError.js'
export { default as FacultadDoesntExistsError } from './DBErrors/FacultadDoesntExistsError.js'
export { default as AreaAcademicaAlredyExistsError } from './DBErrors/AreaAcademicaAlredyExistsError.js'
export { default as AreaAcademicaDoesntExistsError } from './DBErrors/AreaAcademicaDoesntExistsError.js'