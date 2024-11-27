//  schemas/Facultad.js
import z from 'zod'

const facultadSchema = z.object({
    // O B L I G A T O R I O 
    codigo: z.string().max(15, "El código no debe exceder 15 caracteres"),
    nombre: z.string().max(255, "El nombre no debe exceder 255 caracteres"),

    // O P C I O N A L 
    id: z.number()
        .int()
        .positive()
        .optional(),
    direccion: z.string().max(255, "La dirección no debe exceder 255 caracteres")
        .optional(),
    colonia: z.string().max(255, "La colonia no debe exceder 255 caracteres")
        .optional(),
    codigo_postal: z
        .string({ invalid_type_error: "El codigo postal debe ser una cadena de caracteres" })
        .regex(/^\d{5}$/, "El código postal debe tener exactamente 5 dígitos numéricos.")
        .refine((codigo) => parseInt(codigo, 10) >= 1000 && parseInt(codigo, 10) <= 99999, {
            message: "El código postal debe estar en el rango de 01000 a 99999.",
        })
        .optional(),
    num_telefono: z
        .string()
        .max(15, "El número de teléfono no debe exceder 15 caracteres")
        .regex(/^\+?\d*$/, "El número de teléfono debe contener solo dígitos y puede empezar con un '+'")
        .optional(),
    nombre_director: z.string().max(255, "El nombre del director no debe exceder 255 caracteres")
        .optional(),
    fecha_creacion: z
        .string()
        .datetime({ offset: true })
        .optional(),
    id_region: z.number().int().positive()
        .nullable()
        .optional(),
    id_area: z.number().int().positive()
        .nullable()
        .optional(),
});

export default facultadSchema;


export function validarFacultad(object) {
    return facultadSchema.safeParse(object)
}

export function validarParcialmenteFacultad(object) {
    return facultadSchema.partial().safeParse(object)
}
