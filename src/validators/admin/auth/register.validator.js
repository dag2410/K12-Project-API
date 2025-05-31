const { checkSchema } = require("express-validator");
const handlerError = require("../handlerError");

exports.registerValidator = [
  (req, res, next) => {
    res.view = "admin/auth/register";
    res.layout = "admin/layout/auth";
    next();
  },
  checkSchema({
    name: {
      notEmpty: {
        errorMessage: "Vui lòng không được bỏ trống",
      },
    },
    email: {
      notEmpty: {
        errorMessage: "Vui lòng không được bỏ trống",
      },
    },
    password: {
      notEmpty: {
        errorMessage: "Vui lòng không được bỏ trống",
      },
      isLength: {
        options: { min: 8 },
        errorMessage: "Min 8",
      },
    },
    confirm_password: {
      notEmpty: {
        errorMessage: "Vui lòng không được bỏ trống",
      },
      custom: {
        options: (value, { req }) => {
          return value === req.body.password;
        },
        errorMessage: "Mật khẩu xác nhận không đúng với mật khẩu trước đó",
      },
    },
  }),
  handlerError,
];
