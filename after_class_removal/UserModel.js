import UserRepo from './UserRepo';

export default class UserModel {
  constructor (data) {
    Object.entries(data).forEach(([key, value]) => {
      this[key] = value;
    });
  }

  async update(data) {
    Object.entries(data).forEach(([key, value]) => {
      this[key] = value;
    });
    UserRepo.update(this.id, data);
    return this;
  }

  isAdmin () {
    return !!this.admin;
  }
}
export const getByIds = async (ids) => {
  const users = UserRepo.getByIds(ids);
  return users.map((user) => new UserModel(user));
};

export const getById = async (id) => {
  const user = UserRepo.getById(id);
  return new UserModel(user);
};

export const create = async (data) => {
  const user = UserRepo.create(data);
  return new UserModel(user);
};
