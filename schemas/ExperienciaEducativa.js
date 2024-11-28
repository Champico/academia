import { z } from "zod";

const experienciaEducativaSchema = z.object({
    id: z.number().int().optional(), // Opcional, ya que se genera automáticamente
    codigo: z
        .string()
        .max(15, "El código debe tener un máximo de 15 caracteres."),
    nombre: z
        .string()
        .max(255, "El nombre debe tener un máximo de 255 caracteres."),
    fecha_creacion: z
        .string()
        .datetime({ offset: true })
        .optional(),
    id_programa: z
        .number()
        .int()
        .positive("El ID del programa debe ser un número positivo.")
        .optional(),
    id_academia: z
        .number()
        .int()
        .positive("El ID de la academia debe ser un número positivo.")
        .optional(),
});

export function validarExperienciaEducativa(object) {
    return experienciaEducativaSchema.safeParse(object)
}

export function validarParcialmenteExperienciaEducativa(object) {
    return experienciaEducativaSchema.partial().safeParse(object)
}
