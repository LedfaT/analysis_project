const { User } = require("../Entity");
const bcrypt = require("bcryptjs");
const uuid = require("uuid");
const mailService = require("./mailService");
const tokenService = require("./token-service");
const UserDto = require("../models/in/userIn");
const ApiError = require("../exeptions/api-error");

class UserService {
  async _generateUserPayload(user) {
    const userDto = new UserDto(user);
    const tokens = tokenService.generateToken({ ...userDto });
    console.log(userDto);
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: { ...userDto },
    };
  }

  async registration({ email, password, username, user_role }) {
    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
      throw ApiError.BadRequest(`User with email ${email} already exists`);
    }
    const hashPassword = await bcrypt.hash(password, 3);
    const activationLink = uuid.v4();

    if (!user_role) user_role = "USER";
    const newUser = await User.create({
      email,
      username,
      user_role,
      password: hashPassword,
      activationLink,
    });

    await mailService.sendActivationMail(
      email,
      `${process.env.API_URL}/api/activate/${activationLink}`
    );

    return this._generateUserPayload(newUser);
  }

  async activate(activationLink) {
    const user = await User.findOne({ where: { activationLink } });
    if (!user) {
      throw ApiError.BadRequest(`Incorrect activation link`);
    }
    user.isActivated = true;
    await user.save();
  }

  async login(email, password) {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      throw ApiError.BadRequest("User with this email not found not found");
    }

    const isPassEquils = await bcrypt.compare(password, user.password);
    if (!isPassEquils) {
      throw ApiError.BadRequest("Incorrect password");
    }
    return this._generateUserPayload(user);
  }

  async logout(refreshToken) {
    const token = await tokenService.removeToken(refreshToken);
    return token;
  }

  async refresh(refreshToken) {
    if (!refreshToken) {
      throw ApiError.UnauthorizedError();
    }

    const userData = tokenService.validateRefreshToken(refreshToken);
    const tokenFromDB = tokenService.findToken(refreshToken);

    if (!tokenFromDB || !userData) {
      throw ApiError.UnauthorizedError();
    }

    const user = await User.findByPk(userData.id);

    return this._generateUserPayload(user);
  }

  async getAllUsers() {
    const users = await User.findAll();
    return users.map((user) => new UserDto(user));
  }
}

module.exports = new UserService();
