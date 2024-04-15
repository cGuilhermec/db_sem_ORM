import { Request, Response } from "express";
import userService from "../services/UserService";
import { Controller } from "./Controller";

class UserController extends Controller {

    private UserService: typeof  userService;


    constructor(UserService: typeof userService){
        super();
        this.UserService = userService;
    };

    postUser = async (req: Request, res: Response) => {
        const { id } = req.params;
        const { name, email, password, role } = req.body;

        this.handleRequest(
            this.UserService.postUser({ name, email, password, role}, id),
            400,
            500,
            "Usuário criado com sucesso",
            "Ocorreu um erro interno",
            res
        );
    };

    getAllUsers = async (req: Request, res: Response) => {
        const { id } = req.params;

        
        this.handleRequest(
            this.UserService.getAllUsers(id),
            200,
            403,
            "Todos os usuários.",
            "O usuário não é um adm.",
            res
        );
    };

    getUserbyID = async (req: Request, res: Response) => {

        const { id } = req.params;

        this.handleRequest(
            this.UserService.getUserbyID(id),
            200,
            400,
            "Aqui está o usuário:",
            "Não encontramos este usuário.",
            res
        );
    };

    deleteAllUsers = async (req: Request, res: Response) => {

        const { id } = req.params;

        this.handleRequest(
            this.UserService.getAllUsers(id),
            200,
            400,
            "Todos os usuarios foram deletados com sucesso!",
            "Erro ao tentar executar esse metodo.",
            res
        );
    };

    updateUserById = async (req: Request, res: Response) => {
        const { id } = req.params;
        const { name, role } = req.body;

        this.handleRequest(
            this.UserService.updateUserById(name, role, id),
            200,
            400,
            `Usuário Atualizado: `,
            `Ocorreu um erro ao tentar atualizar o usuário: ${name}`,
            res
        );
    };

    deleteUserById = async (req: Request, res: Response) => {
        const { id } = req.params;
        const { idUserDeleted } = req.body;

        this.handleRequest(
            this.UserService.deleteUserById(id, idUserDeleted),
            200,
            400,
            "Sucesso: ",
            "Erro: ",
            res
        );
    };
};



// class User {

//     postUser = async (req: Request, res: Response) => {
//         const { id } = req.params;
//         const { name, email, password, role } = req.body;
        
//         try {
//             const result = await userService.postUser({ name, email, password, role }, id);
            
//             if (result === true) {
//                 return res.status(400).json({ message: "Usuário criado com sucesso." });

//             } else if (typeof result === "string") {
//                 res.status(400).json({ message: result });

//             } else {
//                 res.status(500).json({ message: "Ocorreu um erro interno." });

//             };

//         } catch (error) {
//             console.log("Erro:", error);
//             res.status(500).json({ message: "Ocorreu um erro interno." });

//         };

//     };

//     getAllUsers = async (req: Request, res: Response) => {
//         const { id } = req.params;

//         try {
//             const users = await userService.getAllUsers(id);
//             return res.status(200).json(users);
//         } catch (error) {
//             res.status(403).json(`O usuário não é adm.`);
//         };

//     };

//     getUserbyID = async (req: Request, res: Response) => {

//         const { id } = req.params;

//         const user = await userService.getUserbyID(id);

//         return res.status(200).json({Message: user});

//     };

//     deleteAllUsers = async (_req: Request, res: Response) => {
//         await userService.delteAllUsers();
//         return res.status(200).json({Message: "Todos os usuarios foram deletados com sucesso!"});
//     };

//     updateUserById = async (req: Request, res: Response) => {
//         const { id } = req.params;
//         const { name, role } = req.body;

//         try {
//             const userUpdate = await userService.updateUserById(name, role, id);
//             return res.status(200).json({message: userUpdate});
//         } catch (error) {
//             return res.status(500).json({message: `Ocorreu um erro ao tentar atualizar o usuárioÇ ${name}`});
//         };


//     };

// }




export default UserController;