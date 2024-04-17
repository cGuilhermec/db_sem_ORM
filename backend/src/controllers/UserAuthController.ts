import { Request, Response } from "express";
import IUserAuth from "../models/Interfaces/IUserAuth";
import { authenticate } from "../services/UserAuthService";


export const loginUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            throw new Error('Email e senha são obrigatórios.');
        }

        const user: IUserAuth = { email, password };

        console.log("AuthService:", authenticate);

        const token = await authenticate(user);
        console.log(token)

        if (token) {
            res.status(200).json({ message: 'Usuário autenticado com sucesso', token });
        } else {
            res.status(401).json({ message: 'Credenciais inválidas' });
        }

        res.send('conectado');
    } catch (error) {
        console.error("Error:", error);
        res.status(400).json({ message: 'Erro ao autenticar usuário' });
    }
}

