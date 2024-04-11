import { createConnection } from "../../database/connection";
import IUserInterface from "./Interfaces/IUserInterface";


const createUser = async (user: IUserInterface): Promise<void> => {

  const client = await createConnection();

  await client.query(
    'INSERT INTO users (name, email, password, user_type) VALUES ($1, $2, $3, $4)', [user.name, user.email, user.password, user.user_type]
  );
}

const getUsers = async () => {
  const client = await createConnection();

  const user = await client.query(
    'SELECT * FROM users'
  );

  return user.rows;

}

const getUniqueUser = async ( id: number ) => {

  const client = await createConnection();

  const userUnique = await client.query(
    'SELECT * FROM USER WHERE ID = $1'
  );

  return userUnique;

}

const userModel = {
  createUser,
  getUsers,
  getUniqueUser
};

export default userModel;
