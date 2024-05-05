import { createConnection } from "../../database/connection";
import IUserInterface from "./Interfaces/IUserInterface";



const createUser = async (user: IUserInterface): Promise<void> => {

  const client = await createConnection();

  await client.query(
    'INSERT INTO users (name, email, password, role) VALUES ($1, $2, $3, $4)', [user.name, user.email, user.password, user.role]
  );

}

const getAllUsers = async () => {
  const client = await createConnection();

  const users = await client.query(
    'SELECT id, name, email, role, is_deleted, created_at FROM users WHERE is_deleted = false'
  );

  return users.rows;

};

const getUserbyID = async ( id: string ) => {

  const client = await createConnection();

  const userUnique = await client.query(
    'SELECT name, email, role, is_deleted FROM users WHERE id = $1', [id]
  );

  return userUnique.rows[0];

};

const getUserbyEmail = async ( email: string ) => {

  const client = await createConnection();

  const userByEmail = await client.query(
    'SELECT id, name, password, email, role, is_deleted FROM users WHERE email = $1', [email]
  );

  return userByEmail.rows[0];

};

const getUserRoleById = async (id: string) => {
  const client = await createConnection();

  const userUnique = await client.query(
    'SELECT role FROM users WHERE id = $1', [id]
  );

  return userUnique.rows[0].role;
};

const getUserRoleByEmail = async (email: string) => {
  const client = await createConnection();

  const userUnique = await client.query(
    'SELECT role FROM users WHERE email = $1', [email]
  );

  return userUnique.rows[0].role;
};

const deleteAllUsers = async ():Promise<void> => {
  const client = await createConnection();
  
  await client.query(
    'DELETE FROM users'
  );

};

const updateUserById = async ( name: string, role: string, id: string ) => {

  const client = await createConnection();

  const userUpdate = await client.query(
    'UPDATE users SET name = $1, role = $2 WHERE id = $3', [name, role, id]
  );

  return userUpdate.rows[0];

};

const deleteUserById = async ( id:string ) => {

  const client = await createConnection();

  const userDeleted = await client.query(
    'UPDATE users SET is_deleted = true WHERE id = $1 RETURNING *', [id]
  );

  return userDeleted.rows[0];

};

const userModel = {
  createUser,
  getAllUsers,
  getUserbyID,
  deleteAllUsers,
  getUserRoleById,
  getUserRoleByEmail,
  getUserbyEmail,
  updateUserById,
  deleteUserById
};

export default userModel;
