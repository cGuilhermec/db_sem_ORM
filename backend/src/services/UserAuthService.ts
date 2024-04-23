import bcryptjs from "bcryptjs";
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
import IUserAuth from '../models/Interfaces/IUserAuth';
import userModel from '../models/UserModel';

dotenv.config();

const MY_SECRET_KEY = process.env.MY_SECRET_KEY || '';


const authenticate = async (user: IUserAuth): Promise<string | null> => {
  console.log('User:', user);
  const userAuth = await userModel.getUserbyEmail(user.email);
  console.log('UserAuth:', userAuth);

  if (!userAuth) return null;

  const isValidPassword = await bcryptjs.compare(user.password, userAuth.password);

  if (!isValidPassword) return null;

  const token = jwt.sign({ id: userAuth.id, email: userAuth.email }, MY_SECRET_KEY);

  return token;
};
export const UserAuthService = {
  authenticate,
}
