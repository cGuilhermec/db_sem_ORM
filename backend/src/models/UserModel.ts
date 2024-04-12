import { createConnection } from "../../database/connection";
import IUserInterface from "./Interfaces/IUserInterface";



const createUser = async (user: IUserInterface): Promise<void> => {

  const client = await createConnection();

  await client.query(
    'INSERT INTO users (name, email, password, role) VALUES ($1, $2, $3, $4)', [user.name, user.email, user.password, user.role]
  );

}

const getUsers = async (user: IUserInterface) => {
  const client = await createConnection();

  const users = await client.query(
    'SELECT * FROM users'
  );

  return users.rows;

}
     //getUserbyID
const getUniqueUser = async ( email: string ) => {

  const client = await createConnection();

  const userUnique = await client.query(
    'SELECT * FROM users WHERE email = $1', [email]
  );

  return userUnique.rows[0];

}

const deleteAllUsers = async ():Promise<void> => {
  const client = await createConnection();
  
  await client.query(
    'DELETE FROM USERS'
  );

};

const userModel = {
  createUser,
  getUsers,
  getUniqueUser,
  deleteAllUsers
};

export default userModel;
