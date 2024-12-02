import { z } from 'zod';

// Esquema Zod para el periodo
const periodoSchema = z.object({
    nombre: z.string()
        .min(1, { message: 'El nombre es obligatorio' })
        .max(255, { message: 'El nombre no puede exceder los 255 caracteres' })
        .regex(/^[a-zA-Z0-9\s]+$/, { message: 'El nombre solo puede contener letras, números y espacios' })
        .unique(),

    fecha_creacion: z.string().optional().refine((value) => {
        const regex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/;
        return !value || regex.test(value);
    }, { message: 'El formato de fecha_creacion no es válido' }),

    fecha_inicio: z.string()
        .refine((value) => !value || /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/.test(value), {
            message: 'El formato de fecha_inicio no es válido, debe ser YYYY-MM-DDTHH:mm:ss '
        })
        .optional(),

    fecha_termino: z.string()
        .refine((value) => !value || /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/.test(value), {
            message: 'El formato de fecha_termino no es válido, debe ser YYYY-MM-DDTHH:mm:ss '
        })
        .optional()
});