import z from 'zod'
const usuarioSchema = z.object({
    // - - - C A M P O S  O B L I G A T O R I O S - -
    correo: z.string()
        .regex(/^[a-zA-Z0-9]{6,30}@uv\.mx$/, {
            message: "El nombre de usuario debe tener entre 6 y 30 caracteres y terminar con @uv.mc",
        }),
    clave: z.string()
        .min(8, "La contraseña debe tener al menos 8 caracteres")
        .regex(/[A-ZÁÉÍÓÚÑÜ]/, { message: "La contraseña debe incluir al menos una letra mayúscula" })
        .regex(/[a-záéíóúñü]/, { message: "La contraseña debe incluir al menos una letra minúscula" })
        .regex(/[0-9]/, { message: "La contraseña debe incluir al menos un número" }),
    nombre: z.string()
        .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/, "Nombre solo puede contener letras y espacios."),
    rol: z.enum(["docente", "coordinador"], { message: "El rol es obligatorio" }),


    // - - - C A M P O S  O P C I O N A L E S - - -
    paterno: z.string()
        .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/, "Paterno solo puede contener letras y espacios.")
        .optional().nullable(),
    materno: z.string()
        .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/, "Materno solo puede contener letras y espacios.")
        .optional().nullable(),
    fecha_creacion: z.string()
        .regex(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/, "Fecha no válida (YYYY-MM-DD).")
        .optional().nullable(),
    foto_perfil_ref: z.string()
        .optional().nullable(),
    codigo_facultad: z.string()
        .regex(/^[a-zA-Z0-9-]{10,15}$/, "Código de facultad debe ser de 10-15 caracteres, incluyendo letras mayúsculas, minúsculas, números y guion medio.")
        .optional()
        .nullable(),
    id_facultad: z.number()
        .int("El ID de facultad debe ser un número entero.")
        .optional().nullable(),
    id: z.number().positive().optional().nullable()
})

export function validarUsuarioDatos(object) {
    return usuarioSchema.safeParse(object)
}

export function validarParcialmenteUsuarioDatos(object) {
    return usuarioSchema.partial().safeParse(object)
}





