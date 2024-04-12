import { Request, Response } from "express";
import userService from "../services/UserService";

const postUser = async (req: Request, res: Response) => {
    const { name, email, password, role } = req.body;
    
    try {
        await userService.postUser({ name, email, password, role });
        res.status(201).json({ message: "Usuário criado com sucesso!" });
    } catch (error) {
        res.status(400).json({ message: "Usuário já existe." });
    }

};

const getUsers = async (req: Request, res: Response) => {
    const { email } = req.body;

    try {
        const users = await userService.getUsers(email);
        return res.status(200).json(users);
    } catch (error) {
        res.status(403).json(`O usuário não é adm.`);
    };

};

const  getUniqueUser = async (req: Request, res: Response) => {

    const { id } = req.params;

    const user = await userService.getUniqueUser(id);

    return res.status(200).json({Message: user});

}

const deleteAllUsers = async (_req: Request, res: Response) => {
    await userService.delteAllUsers();
    return res.status(200).json({Message: "Todos os usuarios foram deletados com sucesso!"})
}

const userController = {
    postUser,
    getUsers,
    getUniqueUser,
    deleteAllUsers
};


export default userController;