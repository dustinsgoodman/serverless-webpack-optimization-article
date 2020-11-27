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
