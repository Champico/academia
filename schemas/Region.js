// schemas/Region.js

import z from 'zod'

const regionSchema = z.object({
    // - - - OBLIGATORIAS - - -
    id: z.number().int().nullable().optional(),
    nombre: z
        .string({ invalid_type_error: "El nombre debe ser una cadena de caracteres" })
        .max(100, "El nombre no puede exceder los 100 caracteres."),
    es_vicerrectoria: z.boolean(),

    // - - - OPCIONALES - - -
    direccion: z
        .string({ invalid_type_error: "La direccion debe ser una cadena de caracteres" })
        .max(255, "La dirección no puede exceder los 255 caracteres.")
        .optional(),
    colonia: z
        .string({ invalid_type_error: "La colonia debe ser una cadena de caracteres" })
        .max(255, "La colonia no puede exceder los 255 caracteres.")
        .optional(),
    codigo_postal: z
        .string({ invalid_type_error: "El codigo postal debe ser una cadena de caracteres" })
        .regex(/^\d{5}$/, "El código postal debe tener exactamente 5 dígitos numéricos.")
        .refine((codigo) => parseInt(codigo, 10) >= 1000 && parseInt(codigo, 10) <= 99999, {
            message: "El código postal debe estar en el rango de 01000 a 99999.",
        })
        .optional(),
    num_telefono: z
        .string({ invalid_type_error: "El numero debe ser una cadena de caracteres" })
        .max(15, "El número de teléfono no puede exceder los 15 caracteres.")
        .optional(),
    nombre_rector: z
        .string({ invalid_type_error: "El nombre del rector debe ser una cadena de caracteres" })
        .max(255, "El nombre del rector no puede exceder los 255 caracteres.")
        .optional(),
    fecha_creacion: z
        .string()
        .datetime({ offset: true })
        .nullable()
        .optional(),
});

export function validarRegion(object) {
    return regionSchema.safeParse(object)
}

export function validarParcialmenteRegion(object) {
    return regionSchema.partial().safeParse(object)
}
