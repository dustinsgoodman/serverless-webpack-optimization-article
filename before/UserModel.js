import UserRepo from './UserRepo';

export default class UserModel {
  static async getByIds(ids) {
    const users = UserRepo.getByIds(ids);
    return users.map((user) => new this(user));
  }

  static async getById(id) {
    const user = UserRepo.getById(id);
    return new this(user);
  }

  static async create(data) {
    const user = UserRepo.create(data);
    return new this(user);
  }

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
