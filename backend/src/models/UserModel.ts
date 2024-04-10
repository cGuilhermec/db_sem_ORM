import IUserInterface from "./Interfaces/IUserInterface";

const connection = require('../config/connection');

const createUser = async (user: IUserInterface): Promise<void> => {
  await connection.execute(
    'INSERT INTO users (name, email, password, user_type) VALUES ($1, $2)', [user.name, user.email, user.password, user.user_type]
  );
}

const userModel = {
  createUser
};

export default userModel;
