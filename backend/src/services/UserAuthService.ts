import bcryptjs, { hash } from "bcryptjs";
import IUserAuth from '../models/Interfaces/IUserAuth';
import userModel from '../models/UserModel';
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";

dotenv.config();

const MY_SECRET_KEY = process.env.MY_SECRET_KEY || '';


const UserAuthService = async ( user: IUserAuth ) => {

  const userAuth = await userModel.getUserbyEmail(user.email);

  if( !userAuth ) return null;

  const isValidPasswor = await bcryptjs.compare(user.email, user.password);

  if ( !isValidPasswor ) return null;

  const token = jwt.sign({ id: user.id, email: user.email }, MY_SECRET_KEY);

  return token;

};

export default UserAuthService;