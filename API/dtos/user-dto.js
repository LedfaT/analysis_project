module.exports = class UserDto {
  email;
  id;
  isActicated;

  constructor(model) {
    this.email = model.email;
    this.id = model.id;
    this.isActicated = model.isActicated;
  }
};
