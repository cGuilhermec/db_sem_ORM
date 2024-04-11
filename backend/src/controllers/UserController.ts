import { Request, Response } from "express";
import { createConnection } from "../../database/connection";
import userService from "../services/UserService";
import IUserInterface from "../models/Interfaces/IUserInterface";

const postUser = async (req: Request, res: Response) => {
    const { name, email, password, user_type } = req.body;
    await userService.postUser({ name, email, password, user_type });

    res.status(201).json(userService);
};

const getUsers = async (_req: Request, res: Response) => {
    return res.status(200).json(await userService.getUsers());
}

const  getUniqueUser = async (req: Request, res: Response) => {

    const { id } = req.body;

    const user = userService.getUniqueUser(id);

    return res.status(200).json(user);

}

const userController = {
    postUser,
    getUsers,
    getUniqueUser
};


export default userController;