const { User } = require("../models");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const mailService = require("./mailService");
const tokenService = require("./token-service");
const UserDto = require("../dtos/user-dto");

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

    const userDto = new UserDto(newUser);
    const tokens = tokenService.generateToken({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      userDto,
    };
  }
}

module.exports = new UserService();
