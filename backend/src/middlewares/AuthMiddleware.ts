import { Request, Response, NextFunction } from "express";
import Jwt from "jsonwebtoken";


// // Função de middleware de autenticação que pode receber permissões opcionais
// function authMiddleware(permissions?: string[]) {

//     // Retorna uma funcao que será usada como middleware
//     return async ( req: Request, res: Response, next: NextFunction ) => {

//         // Verifica se o cabeçalho de autorização está presente e é válido
//         const authHeader = req.headers.authorization;

//         if( !authHeader || !authHeader.startsWith("Bearer ") ) {
//             return res.status(401).json({ Message: "O token não foi fornecido!" });
//         };

//         // Extrair o token do cabeçalho
//         const token = authHeader.substring(7);

//         try {
            
//             // Pegar a chave secreta e não estiver definida ele lança um erro.
//             const MY_SECRET_KEY = process.env.MY_SECRET_KEY

//             if ( !MY_SECRET_KEY ) {
//                 throw new Error("A MY_SECRET_KEY não foi fornecida.");
//             }

//             // Decodifica o token JWT usando a chave secreta.
//             const decodedToken = verify(token, MY_SECRET_KEY) as DecodedToken;

//             // Armazenar o token de autenticação na reaquisição, para passar essas infos nas rotas seguintes.
//             req.user = { id: decodedToken.userId };

//             // Verificar se o middleware foi chamado com permissões específicas.
//             if( permissions ) {


//             }

//         } catch (error) {
            
//         }

//     };

// };

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
