import { Request, Response } from "express";
import authenticateUser from "../services/UserAuthService";
import IUserAuth from "../models/Interfaces/IUserAuth";
import { Controller } from "./Controller";

class UserAuthController extends Controller {
    private authService: typeof authenticateUser;

    constructor(authServiceInstance: typeof authenticateUser) {
        super();
        this.authService = authServiceInstance;
    }

    public async loginUser(req: Request, res: Response): Promise<void> {
        try {
            const { email, password } = req.body;
            if (!email || !password) {
                throw new Error('Email e senha são obrigatórios.');
            }

            const user: IUserAuth = { email, password };

            // Acessar o serviço corretamente usando this.authService
            const token = await this.authService(user);

            if (token) {
                res.status(200).json({ message: 'Usuário autenticado com sucesso', token });
            } else {
                res.status(401).json({ message: 'Credenciais inválidas' });
            }
        } catch (error) {
            console.error("Error:", error);
            res.status(400).json({ message: 'Erro ao autenticar usuário' });
        }
    }
}

export default UserAuthController;
