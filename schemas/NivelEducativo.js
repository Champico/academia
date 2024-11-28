// schemas/NivelEducativo.js

import { z } from "zod";

const NivelEducativoSchema = z.object({
    id: z
        .number()
        .int()
        .positive()
        .optional(),
    nombre: z
        .string()
        .min(1, { message: "El nombre es obligatorio y debe tener al menos 1 carácter." })
        .max(80, { message: "El nombre no puede tener más de 80 caracteres." }),
    fecha_creacion: z
        .string()
        .datetime({ offset: true })
        .nullable()
        .optional(),
});

export function validarNivelEducativo(object) {
    return nivelEducativoSchema.safeParse(object)
}

export function validarParcialmenteNivelEducativo(object) {
    return nivelEducativoSchema.partial().safeParse(object)
}
