import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import DecodedToken from "../models/Interfaces/IDecodedToken";
import userService from "../services/UserService";


// Função de middleware de autenticação que pode receber permissões opcionais
function authMiddleware(permissions?: string[]) {

    // Retorna uma funcao que será usada como middleware
    return async ( req: Request, res: Response, next: NextFunction ) => {

        // Verifica se o cabeçalho de autorização está presente e é válido
        const authHeader = req.headers.authorization;

        if( !authHeader || !authHeader.startsWith("Bearer ") ) {
            return res.status(401).json({ Message: "O token não foi fornecido!" });
        };

        // Extrair o token do cabeçalho
        const token = authHeader.substring(7);

        try {
            
            // Pegar a chave secreta e não estiver definida ele lança um erro.
            const MY_SECRET_KEY = process.env.MY_SECRET_KEY

            if ( !MY_SECRET_KEY ) {
                throw new Error("A MY_SECRET_KEY não foi fornecida.");
            }

            // Decodifica o token JWT usando a chave secreta.
            const decodedToken = verify(token, MY_SECRET_KEY) as DecodedToken;

            // Armazenar o token de autenticação na reaquisição, para passar essas infos nas rotas seguintes.
            req.user = { id: decodedToken.userId };

            // Verificar se o middleware foi chamado com permissões específicas.
            if( permissions ) {


            }

        } catch (error) {
            
        }

    };

}