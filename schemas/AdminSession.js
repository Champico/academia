//  schemas/AdminSession.js

import z from 'zod'
const adminSessionSchema = z.object({
    // - - - C A M P O S  O B L I G A T O R I O S - -
    correo: z.string()
        .regex(/^[a-zA-Z0-9]{5,30}@admin\.uv\.mx$/, {
            message: "El nombre de usuario debe tener entre 6 y 30 caracteres y terminar con @admin.uv.mx",
        }),
    clave: z.string()
        .min(8, "La contraseña debe tener al menos 8 caracteres")
        .max(64, "La contraseña puede tener hasta 64 caracteres"),
    id_facultad: z.number()
        .int("El ID de facultad debe ser un número entero.")
        .positive("El ID es un numero positivo")
    ,


    // - - - O P C I O N A L E S - - -
    id_facultad: z.number()
        .int("El ID de facultad debe ser un número entero.")
        .positive("El ID es un numero positivo")
        .optional().nullable(),
    id: z.number().positive().optional().nullable()

})

export function validarAdministrador(object) {
    return adminSessionSchema.safeParse(object)
}

export function validarParcialmenteAdministrador(object) {
    return adminSessionSchema.partial().safeParse(object)
}





