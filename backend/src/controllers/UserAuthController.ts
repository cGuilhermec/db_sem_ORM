import { Request, Response } from "express";
import IUserAuth from "../models/Interfaces/IUserAuth";
import {UserAuthService}  from "../services/UserAuthService";

export const loginUser = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            throw new Error('Email e senha são obrigatórios.');
        }

        const user: IUserAuth = { email, password };

        console.log("AuthService:", UserAuthService.authenticate);

        const token = await UserAuthService.authenticate(user);

        console.log(token);

        if (token) {
            // Se o usuário for autenticado com sucesso, envie a resposta com o token
            res.status(200).json({ message: 'Usuário autenticado com sucesso', token, user: user.email} );
        } else {
            // Se as credenciais forem inválidas, envie uma resposta de erro
            res.status(401).json({ message: 'Credenciais inválidas' });
        }
    } catch (error) {
        // Em caso de erro, envie uma resposta de erro
        console.error("Error:", error);
        res.status(400).json({ message: 'Erro ao autenticar usuário' });
    }
};
