const jwt = require("jsonwebtoken");

class TokenService {
  generateToken(payload) {
    const accessToken = jwt.sign(payload);
  }
}

module.exports = new TokenService();
