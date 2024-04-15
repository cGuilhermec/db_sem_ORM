import express from 'express';
import User from '../controllers/UserController';

const user = new User();


export const router = express.Router();



//User
router.post('/new-user/:id', user.postUser);
router.post('/att-user/:id', user.updateUserById);
router.get('/users/:id', user.getAllUsers);
router.get('/get-unique-user-by-id/:id', user.getUserbyID);
router.delete('/delete-all-users', user.deleteAllUsers);