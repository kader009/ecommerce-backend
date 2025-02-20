import express from 'express';
import { UserController } from './user.controllers';

const router = express.Router();

router.post('/sign-up', UserController.registerUser);
router.post('/sign-in', UserController.loginUser);

export const UserRouter = router;
