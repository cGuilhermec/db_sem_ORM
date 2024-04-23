import { Request, Response } from "express";
import userService from "../services/UserService";

const postUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, email, password, role } = req.body;

    try {
        const result = await userService.postUser({ name, email, password, role }, id);

        if (result === true) {
            return res.status(400).json({ message: "Usuário criado com sucesso." });

        } else if (typeof result === "string") {
            res.status(400).json({ message: result });

        } else {
            res.status(500).json({ message: "Ocorreu um erro interno." });

        };

    } catch (error) {
        console.log("Erro:", error);
        res.status(500).json({ message: "Ocorreu um erro interno." });

    };

};

const getAllUsers = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const users = await userService.getAllUsers(id);
        return res.status(200).json(users);
    } catch (error) {
        res.status(403).json(`O usuário não é admmm.`);
    };

};

const getUserbyID = async (req: Request, res: Response) => {

    const { id } = req.params;

    const user = await userService.getUserbyID(id);

    return res.status(200).json({Message: user});

};

const deleteAllUsers = async (_req: Request, res: Response) => {
    await userService.delteAllUsers();
    return res.status(200).json({Message: "Todos os usuarios foram deletados com sucesso!"});
};

const deleteUserById = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { idUserDeleted } = req.body;

    const user = await userService.deleteUserById(id, idUserDeleted);

    res.status(200).json(user);

};

const updateUserById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, role } = req.body;

    try {
        const userUpdate = await userService.updateUserById(name, role, id);
        return res.status(200).json({message: userUpdate});
    } catch (error) {
        return res.status(500).json({message: `Ocorreu um erro ao tentar atualizar o usuárioÇ ${name}`});
    };


};

export const userController = {
    postUser,
    getAllUsers,
    getUserbyID,
    deleteAllUsers,
    updateUserById,
    deleteUserById
};