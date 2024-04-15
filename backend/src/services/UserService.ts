import IUserInterface from '../models/Interfaces/IUserInterface';
import userModel from '../models/UserModel';
import { hash } from "bcryptjs";

const postUser = async (user: IUserInterface, id: string) => {

  try {
    
    const verifyUser = await userModel.getUserbyEmail(user.email);

    if (verifyUser) {
      return "Usuário com este email já existe.";
    }

    const role = await userModel.getUserRole(id);

    if (role !== "adm") {
      return "Usuário não pode criar um usuário pois não é adm.";
    }

    const hash_password = await hash(user.password, 8);

    user.password = hash_password;
    await userModel.createUser(user);
    
    return true; // Usuário criado com sucesso
  } catch (error) {
    throw new Error("Erro ao criar usuário.");
  }

};

const getAllUsers = async (id: string) => {
  
  try {
    const role = await userModel.getUserRole(id);
    if (role === "adm") {
      return await userModel.getAllUsers();
    } else {
      throw new Error("Usuário não é adm");
    }
  } catch (error) {
    throw new Error("Erro ao obter usuários: ");
  }

};

const getUserbyID = async (id: string) => {
  return await userModel.getUserbyID(id);
}

const delteAllUsers = async () => {
  return await userModel.deleteAllUsers();
}

const updateUserById = async (name: string, role:string, id: string) => {

  try {
    
    const userVerify = await userModel.getUserbyID(id);

    if(!userVerify) {
      return 'Usuário não encontrado!';
    };

    await userModel.updateUserById(name, role, id);

    return { success: true, message: `Usuário ${name} foi atualizado com sucesso!` };


  } catch (error) {
    
    return {Success: false, message: error};

  };

}

const userService = {
  postUser,
  getAllUsers,
  getUserbyID,
  delteAllUsers,
  updateUserById
};

export default userService;
