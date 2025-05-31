const { checkSchema } = require("express-validator");
const handlerError = require("../handlerError");

exports.loginValidator = [
  (req, res, next) => {
    res.view = "admin/auth/login";
    res.layout = "admin/layout/auth";
    next();
  },
  checkSchema({
    email: {
      notEmpty: {
        errorMessage: "Vui lòng không được bỏ trống",
      },
    },
    password: {
      notEmpty: {
        errorMessage: "Vui lòng không được bỏ trống",
      },
    },
  }),
  handlerError,
];
