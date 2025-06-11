const jwt = require("jsonwebtoken");
const MAIL_JWT_SECRET =
  "3ec7bbdbd46c700128b3794f67f7788de2e6e4d9a95033b12cefebc7d4de5b845216082ab26c46b93f68c88aa005c59a5a19ae005ced4cf9b07cc55ec9bb1a25";
exports.createToken = function (payload, options) {
  const token = jwt.sign(payload, MAIL_JWT_SECRET, options);
  return token;
};

exports.verifyToken = function (token) {
  try {
    const decoded = jwt.verify(token, MAIL_JWT_SECRET);
    return {
      success: true,
      data: decoded,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
};
