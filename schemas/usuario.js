import z from 'zod'
const movieSchema = z.object({
    id: z.number().int().positive("El ID debe ser un número entero positivo."),
    correo: z.string()
        .regex(/^[a-zA-Z0-9]{6,30}@uv\.mx$/, {
            message: "El correo debe ser válido y terminar en @uv.mx, con un nombre de usuario de 6 a 30 caracteres (solo letras y números).",
        }),
    clave: z.string()
        .min(8, "La contraseña debe tener al menos 8 caracteres")
        .regex(/[A-Z]/, { message: "La contraseña debe incluir al menos una letra mayúscula" })
        .regex(/[a-z]/, { message: "La contraseña debe incluir al menos una letra minúscula" })
        .regex(/[0-9]/, { message: "La contraseña debe incluir al menos un número" })
        .regex(/[@$!%*?&#]/, { message: "La contraseña debe incluir al menos un carácter especial (@$!%*?&#)" }),
    nombre: z
        .string()
        .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/, "Nombre solo puede contener letras y espacios."),
    paterno: z
        .string()
        .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/, "Paterno solo puede contener letras y espacios."),
    materno: z
        .string()
        .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/, "Materno solo puede contener letras y espacios."),
    fecha_creacion: z
        .string()
        .regex(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/, "Fecha no válida (YYYY-MM-DD)."),
    foto_perfil_ref: z
        .string(),
    rol: z.enum(["docente", "coordinador"]),
    codigo_facultad: z
        .string()
        .regex(/^[a-zA-Z0-9]{10,15}$/, "Código de facultad debe ser de 10-15 caracteres."),
    id_facultad: z.number().int("El ID de facultad debe ser un número entero.")
})

export function validarUsuario(object) {
    return movieSchema.safeParse(object)
}

export function validarParcialmenteUsuario(object) {
    return movieSchema.partial().safeParse(object)
}
