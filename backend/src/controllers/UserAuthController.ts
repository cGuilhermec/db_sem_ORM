import { Request, Response } from "express";
import IUserAuth from "../models/Interfaces/IUserAuth";
import {UserAuthService}  from "../services/UserAuthService";
import jwt from 'jsonwebtoken'; 
import dotenv from "dotenv";

dotenv.config();

const MY_SECRET_KEY = process.env.MY_SECRET_KEY || '';

export const loginUser = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: 'Email e senha são obrigatórios.' });
        }

        const user: IUserAuth = { email, password };

        console.log("AuthService:", UserAuthService.authenticate);

        const token = await UserAuthService.authenticate(user);

        // console.log(token);

        if (token) {
            // Se o usuário for autenticado com sucesso, envie a resposta com o token
             const decodedToken: any = jwt.verify(token, MY_SECRET_KEY);
             const role = decodedToken.role;
            console.log(role);
            console.log(token);
            console.log(user.email);
            res.status(200).json({ message: 'Usuário autenticado com sucesso', token, user: user.email, role });
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
