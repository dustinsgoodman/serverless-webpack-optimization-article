import UserRepo from 'Repos/UserRepo';
import UserModel from './UserModel';

export const getByIds = async (ids) => {
  const users = UserRepo.getByIds(ids);
  return users.map((user) => new UserModel(user));
};
