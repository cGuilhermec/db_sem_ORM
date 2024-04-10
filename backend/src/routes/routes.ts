import express from 'express';
import { createUser } from '../controllers/UserController';

export const router = express.Router();

router.post('/create-user', createUser);