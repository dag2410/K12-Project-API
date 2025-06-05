const { checkSchema } = require("express-validator");
const handlerError = require("./handlerError");
const usersService = require("@/services/users.service");

exports.registerValidator = [
  (req, res, next) => {
    res.view = "admin/auth/register";
    res.layout = "admin/layout/auth";
    next();
  },
  ...checkSchema({
    name: {
      notEmpty: {
        errorMessage: "Vui lòng không được bỏ trống",
      },
    },
    email: {
      notEmpty: {
        errorMessage: "Vui lòng không được bỏ trống",
      },
      custom: {
        options: async (email, { req }) => {
          const user = await usersService.getByEmailAndPassword(
            email,
            req.body.password
          );
          if (user) throw new Error("Email đã tồn tại");
          return true;
        },
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

exports.loginValidator = [
  (req, res, next) => {
    res.view = "admin/auth/login";
    res.layout = "admin/layout/auth";
    next();
  },
  ...checkSchema({
    email: {
      notEmpty: {
        errorMessage: "Vui lòng không được bỏ trống",
      },
      isEmail: {
        errorMessage: "Vui lòng nhập đúng định dạng email",
      },
    },
    password: {
      notEmpty: {
        errorMessage: "Vui lòng không được bỏ trống",
      },
      custom: {
        options: async (password, { req }) => {
          const { email } = req.body;
          const user = await usersService.getByEmailAndPassword(
            email,
            password
          );
          if (!user) throw new Error("Email hoặc mật khẩu không đúng");
          req.user = user;
        },
      },
    },
  }),
  handlerError,
];
