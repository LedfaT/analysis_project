const userService = require("../services/userService");

class UserController {
  async registration(req, res, next) {
    try {
      const { email, password } = req.body;
      const userData = await userService.registration(email, password);
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      console.log("User created succsesfully");
      return res.json(userData);
    } catch (e) {
      return res.status(401).send({ error: e.message });
    }
  }

  async login(req, res, next) {
    try {
    } catch (e) {}
  }

  async logout(req, res, next) {
    try {
    } catch (e) {}
  }

  async refresh(req, res, next) {
    try {
    } catch (e) {}
  }

  async getUsers(req, res, next) {
    try {
      res.json(["123", "784332"]);
    } catch (e) {}
  }

  async activate(req, res, next) {
    try {
    } catch (e) {}
  }
}

module.exports = new UserController();
