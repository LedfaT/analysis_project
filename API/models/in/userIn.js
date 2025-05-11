module.exports = class UserDto {
  email;
  id;
  isActivated;
  user_role;
  username;
  createdAt;
  constructor(model) {
    this.email = model.email;
    this.id = model.id;
    this.user_role = model.user_role;
    this.username = model.username;
    this.isActivated = model.isActivated;
    this.createdAt = model.createdAt;
  }
};
