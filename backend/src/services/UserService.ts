import IUserInterface from '../models/Interfaces/IUserInterface';
import userModel from '../models/UserModel';

const postUser = async (user: IUserInterface) => {
  await userModel.createUser(user);
}

const userService = {
  postUser
};

export default userService;
