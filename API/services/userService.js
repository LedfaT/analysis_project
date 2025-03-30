const db = require("../models");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const User = db.User;

const mailService = require("./mailService");
class UserService {
  async registration(email, password) {
    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
      throw new Error(`User with email ${email} already exists`);
    }

    const hashPassword = await bcrypt.hash(password, 3);
    const activationLink = uuid.v4;
    const newUser = await User.create({
      email,
      password: hashPassword,
      activationLink,
    });

    await mailService.sendActivationMail(email, activationLink);
  }
}

module.exports = new UserService();
