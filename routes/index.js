import express from 'express';
import userRouter from './userRoutes';

const router = express.Router();

router.use('/auth', userRouter);

export default router;
