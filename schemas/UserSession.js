//  schemas/UserSession.js

import z from 'zod'
const userSessionSchema = z.object({
    // - - - C A M P O S  O B L I G A T O R I O S - -
    correo: z.string()
        .regex(/^[a-zA-Z0-9]{5,30}@uv\.mx$/, {
            message: "El nombre de usuario debe tener entre 6 y 30 caracteres y terminar con @uv.mc",
        }),
    clave: z.string()
        .min(8, "La contraseña debe tener al menos 8 caracteres")
        .max(64, "La contraseña puede tener hasta 64 caracteres"),
    rol: z.enum(["docente", "coordinador"], { message: "El rol es obligatorio" }).optional(),

    // - - - O P C I O N A L E S - - -
    id: z.number().positive().optional().nullable()
})

export function validarUsuario(object) {
    return userSessionSchema.safeParse(object)
}

export function validarParcialmenteUsuario(object) {
    return userSessionSchema.partial().safeParse(object)
}





