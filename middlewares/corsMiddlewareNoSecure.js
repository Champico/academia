import cors from 'cors'

export const corsMiddlewareNoSecure = () => cors({
    origin: '*',
    credentials: true
})