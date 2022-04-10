import express from 'express';
import { createUser, signIn } from '../controllers/userController';

const router = express.Router();
router.post('/register', createUser);
router.post('/login', signIn);

export default router;
