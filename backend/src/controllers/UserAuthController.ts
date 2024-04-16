import { Request, Response } from "express";
import UserAuthService from "../services/UserAuthService";
import IUserAuth from "../models/Interfaces/IUserAuth";
import { Controller } from "./Controller";

class UserAuthController extends Controller {
    private authService: UserAuthService;

    constructor(authServiceInstance: UserAuthService) {
        super();
        console.log("AuthServiceInstance:", authServiceInstance);
        this.authService = authServiceInstance;
    }

    public async loginUser(req: Request, res: Response): Promise<void> {
        try {
            console.log("Request body:", req.body);
            const { email, password } = req.body;
            if (!email || !password) {
                throw new Error('Email e senha são obrigatórios.');
            }

            const user: IUserAuth = { email, password };

            console.log("AuthService:", this.authService);

            const token = await this.authService.authenticate(user);
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
}

export default UserAuthController;