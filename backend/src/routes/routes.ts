import express from 'express';
import UserController from '../controllers/UserController';
import userService from '../services/UserService';
import UserAuthService from '../services/UserAuthService';
import UserAuthController from '../controllers/UserAuthController';
import { authenticateToken } from '../middlewares/AuthMiddleware';

const userController = new UserController(userService);
const authServiceInstance = new UserAuthService();
console.log("AuthServiceInstance:", authServiceInstance);
const userAuthController = new UserAuthController(authServiceInstance);


export const router = express.Router();



//Rotas do User que exigem autenticação com JWT
router.post('/att-user/:id', authenticateToken, userController.updateUserById);
router.get('/users/:id', userController.getAllUsers);
router.get('/get-unique-user-by-id/:id', authenticateToken, userController.getUserbyID);
router.delete('/delete-all-users', authenticateToken, userController.deleteAllUsers);
router.post('/delete-user/:id', authenticateToken, userController.deleteUserById);

// Rotas públicas (que não requerem autenticação)
router.post('/new-user/:id', userController.postUser);
router.post('/login', userAuthController.loginUser);