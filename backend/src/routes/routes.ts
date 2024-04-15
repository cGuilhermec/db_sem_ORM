import express from 'express';
import User from '../controllers/UserController';
import UserController from '../controllers/UserController';
import userService from '../services/UserService';

const user = new UserController(userService);


export const router = express.Router();



//User
router.post('/new-user/:id', user.postUser);
router.post('/att-user/:id', user.updateUserById);
router.get('/users/:id', user.getAllUsers);
router.get('/get-unique-user-by-id/:id', user.getUserbyID);
router.delete('/delete-all-users', user.deleteAllUsers);
router.delete('/delete-user/:id', user.deleteUserById);