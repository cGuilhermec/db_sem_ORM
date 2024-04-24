import IUserInterface from '../models/Interfaces/IUserInterface';
import userModel from '../models/UserModel';
import { hash } from "bcryptjs";

const postUser = async (user: IUserInterface, id: string) => {

  try {
    
    const verifyUser = await userModel.getUserbyEmail(user.email);

    if (verifyUser) {
      return `Usuário com o email ${user.email} já existe.`;
    };

    const role = await userModel.getUserRoleById(id);

    if (role !== "adm") {
      return "Usuário não pode criar um usuário pois não é adm.";
    };

    const hash_password = await hash(user.password, 8);

    user.password = hash_password;
    await userModel.createUser(user);
    
    return true; // Usuário criado com sucesso
  } catch (error) {
    throw new Error("Erro ao criar usuário.");
  };

};

const getAllUsers = async (id: string) => {
  
  try {
    const role = await userModel.getUserRoleById(id);
    if (role === "adm") {
      return await userModel.getAllUsers();
    } else {
      throw new Error("Usuário não é adm");
    }
  } catch (error) {
    throw new Error("Erro ao obter usuários: ");
  };

};

const getUserbyID = async (id: string) => {
  const user = await userModel.getUserbyID(id);

  if(user) {
    return user;
  } else return 'Usuário não existe, ou foi digitado incorreto.';

};

const delteAllUsers = async () => {
  return await userModel.deleteAllUsers();
};

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

};

const deleteUserById = async ( id: string, idUserDeleted: string ) => {

  try {
    
    const verifyUser = await userModel.getUserRoleById(id);

    if( verifyUser === "adm" ) {

      await userModel.deleteUserById(idUserDeleted);

      return `O usuário foi desativado com sucesso`;

    } else {
      return 'Você não está autorizado a fazer isso! Procure um adm.'
    };

  } catch (error) {
    return {Success: false, message: error};
  };

};

const getUserRoleByEmail = async (email: string) => {
  try {
    const verifyUserRole = await userModel.getUserRoleByEmail(email);

    return `A role do ${email} é ${verifyUserRole}`;

  } catch (error) {
    return {Success: false, message: error};
  }
};

const userService = {
  postUser,
  getAllUsers,
  getUserbyID,
  delteAllUsers,
  updateUserById,
  deleteUserById,
  getUserRoleByEmail
};

export default userService;
