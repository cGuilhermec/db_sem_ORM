import { Request, Response } from "express";
import { createConnection } from "../../database/connection";
import userService from "../services/UserService";
import IUserInterface from "../models/Interfaces/IUserInterface";

const postUser = async (req: Request, res: Response) => {
    const { name, email, password, user_type } = req.body;
    await userService.postUser({ name, email, password, user_type });

    res.status(201).json({Message: "Usúario criado com sucesso!"});
};

const getUsers = async (_req: Request, res: Response) => {
    return res.status(200).json(await userService.getUsers());
}

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