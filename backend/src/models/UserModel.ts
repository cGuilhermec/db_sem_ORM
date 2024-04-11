import { createConnection } from "../../database/connection";
import IUserInterface from "./Interfaces/IUserInterface";
import { hash } from "bcryptjs";


const createUser = async (user: IUserInterface): Promise<void> => {

  const client = await createConnection();
  const hash_password = await hash(user.password, 8);

  await client.query(
    'INSERT INTO users (name, email, password, user_type) VALUES ($1, $2, $3, $4)', [user.name, user.email, hash_password, user.user_type]
  );

}

const getUsers = async () => {
  const client = await createConnection();

  const user = await client.query(
    'SELECT * FROM users'
  );

  return user.rows;

}
     //getUserbyID
const getUniqueUser = async ( id: string ) => {

  const client = await createConnection();

  const userUnique = await client.query(
    'SELECT * FROM users WHERE ID = $1', [id]
  );

  return userUnique.rows;

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
