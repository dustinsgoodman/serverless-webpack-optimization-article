import UserRepo from 'Repos/UserRepo';
import UserModel from './UserModel';

export const getById = async (id) => {
  const user = UserRepo.getById(id);
  return new UserModel(user);
};
