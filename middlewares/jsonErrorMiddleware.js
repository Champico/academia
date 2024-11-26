// middleware/jsonErrorMiddleware

export const jsonErrorMiddleware = (err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        return res.status(400).json({ error: 'El cuerpo de la solicitud debe ser un JSON válido' });
    }
    next();
};