import UserRepo from 'Repos/UserRepo';
import UserModel from './UserModel';

export const create = async (data) => {
  const user = UserRepo.create(data);
  return new UserModel(user);
};
