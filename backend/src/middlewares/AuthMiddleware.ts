import { Request, Response, NextFunction } from "express";
import Jwt from "jsonwebtoken";

const MY_SECRET_KEY = process.env.MY_SECRET_KEY || '';

// Função middleware para autenticar o token
export function authenticateToken(req: Request, res: Response, next: NextFunction): void {

    // Obtém o token JWT do cabeçalho Authorization
    const token = req.headers['authorization']?.split(' ')[1];

    // Verifica se o token não foi fornecido
    if (!token) {
        res.status(401).json({ message: 'Token de autenticação não fornecido' });
        return;
    }

    // Verifica o token JWT
    Jwt.verify(token, MY_SECRET_KEY, (err) => {

        // Se houver erro na verificação do token
        if (err) {
            res.status(403).json({ message: 'Falha ao verificar o token de autenticação' });
            return;
        }

        // Se o token for válido, chama a próxima função middleware
        next();
    });
}
