import { User } from './user.model';

const registerUser = async (email: string) => {
  return await User.findOne({ email: email });
};

export const UserServices = {
  registerUser,
};
