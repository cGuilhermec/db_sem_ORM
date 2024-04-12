import IUserInterface from '../models/Interfaces/IUserInterface';
import userModel from '../models/UserModel';
import { hash } from "bcryptjs";

const postUser = async (user: IUserInterface) => {

  const verifyUser = await userModel.getUniqueUser(user.email);

  if( verifyUser ) {
    throw new Error(`O usuário com o email ${user.email} já está cadastrado.`);
  };

  const hash_password = await hash(user.password, 8);

  user.password = hash_password;
  
  await userModel.createUser(user);

};

const getUsers = async (user: IUserInterface) => { 

  if( user.role === 'adm' ){
    return await userModel.getUsers(user); 
  } else {
     throw new Error("Usuario nao e adm");
  }

  
};

const getUniqueUser = async (id: string) => {
  return await userModel.getUniqueUser(id);
}

const delteAllUsers = async () => {
  return await userModel.deleteAllUsers();
}

const userService = {
  postUser,
  getUsers,
  getUniqueUser,
  delteAllUsers
};

export default userService;
