//  schemas/Region.js

import z from 'zod'

const areaAcademicaSchema = z.object({
    // - - - OBLIGATORIAS - - -
    id: z.number().int().nullable().optional(),
    nombre: z
        .string({ invalid_type_error: "El nombre debe ser una cadena de caracteres" })
        .max(100, "El nombre no puede exceder los 100 caracteres."),

    fecha_creacion: z
        .string()
        .datetime({ offset: true })
        .nullable()
        .optional(),
});

export function validarAreaAcademica(object) {
    return areaAcademicaSchema.safeParse(object)
}

export function validarParcialmenteAreaAcademica(object) {
    return areaAcademicaSchema.partial().safeParse(object)
}
