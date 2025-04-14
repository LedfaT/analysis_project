const ApiError = require("../exeptions/api-error");

module.exports = function (req, res, next) {
  try {
    if (req.user.role !== "ADMIN") {
      return next(ApiError.Forbidden());
    }
    next();
  } catch (e) {
    return next(ApiError.Forbidden());
  }
};
