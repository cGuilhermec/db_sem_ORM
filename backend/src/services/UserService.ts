import IUserInterface from '../models/Interfaces/IUserInterface';
import userModel from '../models/UserModel';

const postUser = async (user: IUserInterface) => {
  await userModel.createUser(user);
}

const getUsers = async () => {
  return await userModel.getUsers(); 
}

const getUniqueUser = async (id: IUserInterface) => {
  return await userModel.getUniqueUser(id);
}

const userService = {
  postUser,
  getUsers,
  getUniqueUser
};

export default userService;
