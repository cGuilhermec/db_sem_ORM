import express from 'express';
import { createUser } from '../controllers/UserController';
import userController from '../controllers/UserController';


export const router = express.Router();

router.post('/create-user', createUser);

router.post('/new-user', userController.postUser);