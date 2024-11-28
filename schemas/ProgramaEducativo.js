// schemas/ProgramaEducativo.js

import { z } from "zod";

const ProgramaEducativoSchema = z.object({
    id: z
        .number()
        .int()
        .positive()
        .optional(),
    codigo: z
        .string()
        .min(1, { message: "El código es obligatorio y debe tener al menos 1 carácter." })
        .max(15, { message: "El código no puede tener más de 15 caracteres." }),
    nombre: z
        .string()
        .min(1, { message: "El nombre es obligatorio y debe tener al menos 1 carácter." })
        .max(80, { message: "El nombre no puede tener más de 80 caracteres." }),
    fecha_creacion: z
        .string()
        .datetime({ message: "La fecha de creación debe ser válida en formato ISO." })
        .optional(),
    id_facultad: z
        .number()
        .int()
        .positive({ message: "El id de facultad debe ser un número entero positivo." })
        .optional(),
    id_nivel: z
        .number()
        .int()
        .positive({ message: "El id de nivel debe ser un número entero positivo." })
        .optional(),
});

export function validarProgramaEducativo(object) {
    return programaEducativoSchema.safeParse(object)
}

export function validarParcialmenteProgramaEducativo(object) {
    return programaEducativoSchema.partial().safeParse(object)
}
