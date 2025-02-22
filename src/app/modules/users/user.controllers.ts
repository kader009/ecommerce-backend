import { Request, Response } from 'express';
import { UserServices } from './user.services';
import jwt from 'jsonwebtoken';
import config from '../../config';

const JWT_secret = config.jwt_token as string;

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

    const userRole = role || 'user';

    const user = await UserServices.createUser(email, password, role);
    res.status(200).json({
      message: 'User created successfully',
      user,
    });
  } catch (error) {
    let message = 'Something went wrong';
    if (error instanceof Error) {
      message = error.message;
    }

    res.status(500).json({
      success: false,
      message: message,
    });
  }
};

const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await UserServices.registerUser(email);

    if (!user) {
      res.status(400).json({
        message: 'Invalid email & password',
      });
      return;
    }

    const isvalidPassword = await UserServices.ValidatePassword(
      password,
      user?.password,
    );

    if (!isvalidPassword) {
      res.status(400).json({
        message: 'Invalid password',
      });
      return;
    }

    const token = jwt.sign(
      { email: user?.email, role: user?.role },
      JWT_secret,
      { expiresIn: '1h' },
    );

    res.status(200).json({ message: 'User logged in successfully', token });
  } catch (error) {
    res.status(500).json({
      message: 'User login failed',
      error: error,
    });
  }
};

export const UserController = {
  registerUser,
  loginUser,
};
