import express from 'express';
import userController from '../controllers/UserController';


export const router = express.Router();

//User
router.post('/new-user', userController.postUser);
router.get('/users', userController.getUsers);
router.get('/get-unique-user', userController.getUniqueUser);