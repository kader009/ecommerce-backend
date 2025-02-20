import { Request, Response } from 'express';
import { UserServices } from './user.services';

const registerUser = async (req: Request, res: Response) => {
  const { email, password, role } = req.body;
  try {
    const existUser = await UserServices.registerUser(email);

    if (existUser) {
      res.status(409).json({
        message: 'User email is already exists',
      });
      return;
    }
  } catch (error) {}
};

const loginUser = async (req: Request, res: Response) => {};

export const UserController = {
  registerUser,
  loginUser,
};
