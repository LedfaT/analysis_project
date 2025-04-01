const { User } = require("../models");
const bcrypt = require("bcryptjs");
const uuid = require("uuid");
const mailService = require("./mailService");
const tokenService = require("./token-service");
const UserDto = require("../dtos/dtos-in/user-dto");
const ApiError = require("../exeptions/api-error");

class UserService {
  async registration(email, password) {
    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
      throw ApiError.BadRequest(`User with email ${email} already exists`);
    }

    const hashPassword = await bcrypt.hash(password, 3);
    const activationLink = uuid.v4();
    const newUser = await User.create({
      email,
      password: hashPassword,
      activationLink,
    });

    await mailService.sendActivationMail(
      email,
      `${process.env.API_URL}/api/activate/${activationLink}`
    );

    const userDto = new UserDto(newUser);
    const tokens = tokenService.generateToken({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: { ...userDto },
    };
  }

  async activate(activationLink) {
    const user = await User.findOne({ where: { activationLink } });
    console.log(user);
    if (!user) {
      throw new Error(`Incorrect activation link `);
    }
    user.isActivated = true;
    await user.save();
  }
}

module.exports = new UserService();
