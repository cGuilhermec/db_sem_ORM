import IUserInterface from '../models/Interfaces/IUserInterface';
import userModel from '../models/UserModel';

const postUser = async (user: IUserInterface) => {
  await userModel.createUser(user);
}

const getUsers = async () => {
  return await userModel.getUsers(); 
}

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
