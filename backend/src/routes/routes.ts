import express from 'express';
import { userController } from '../controllers/UserController';
import { authenticateToken } from '../middlewares/AuthMiddleware';
import { loginUser } from '../controllers/UserAuthController';



export const router = express.Router();



//Rotas do User que exigem autenticação com JWT
router.post('/att-user/:id', authenticateToken, userController.updateUserById);
router.get('/users/:id', userController.getAllUsers);
router.get('/get-unique-user-by-id/:id', authenticateToken, userController.getUserbyID);
router.delete('/delete-all-users', authenticateToken, userController.deleteAllUsers);
router.post('/delete-user/:id', authenticateToken, userController.deleteUserById);
router.post('/new-user/:id', authenticateToken, userController.postUser);

// Rotas públicas (que não requerem autenticação)
router.post('/login', loginUser);