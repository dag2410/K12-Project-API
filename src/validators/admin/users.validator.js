const { checkSchema } = require("express-validator");
const handlerError = require("./handlerError");

exports.createUserValidator = [
  (req, res, next) => {
    res.view = "admin/users/create";
    next();
  },
  checkSchema({
    name: {
      notEmpty: {
        errorMessage: "Name không được để trống.",
      },
    },
    email: {
      notEmpty: {
        errorMessage: "Email không được để trống.",
      },
      isEmail: {
        errorMessage: "Vui lòng nhập đúng định dạng của email.",
      },
    },
    password: {
      notEmpty: {
        errorMessage: "Mật khẩu không được để trống.",
      },
      isLength: {
        options: { min: 8 },
        errorMessage: "Mật khẩu tối thiểu 8 ký tự.",
      },
    },
    phone: {
      notEmpty: {
        errorMessage: "Số điện thoại không được để trống.",
      },
      isInt: {
        errorMessage: "Số điện thoại chưa đúng định dạng.",
      },
      isLength: {
        options: { min: 9, max: 10 },
        errorMessage: "Số điện thoai tối thiểu có 9 số, tối đa có 10 số.",
      },
    },
    address: {
      notEmpty: {
        errorMessage: "Địa chỉ không được để trống.",
      },
    },
    username: {
      notEmpty: {
        errorMessage: "Username không được để trống.",
      },
    },
    confirm_password: {
      notEmpty: {
        errorMessage: "Nhập lại mật khẩu đã nhập trước đó.",
      },
      custom: {
        options: (value, { req }) => {
          return value === req.body.password;
        },
        errorMessage: "Mật khẩu nhập lại không khớp với mật khẩu trước đó.",
      },
    },
  }),
  handlerError,
];

exports.updateUserValidator = [
  (req, res, next) => {
    res.view = "admin/users/edit";
    next();
  },
  checkSchema({
    name: {
      notEmpty: true,
      errorMessage: "Name không được để trống.",
    },

    email: {
      notEmpty: {
        errorMessage: "Email không được để trống.",
      },
      isEmail: {
        errorMessage: "Vui lòng nhập đúng định dạng của email.",
      },
    },
    phone: {
      notEmpty: {
        errorMessage: "Số điện thoại không được để trống.",
      },
      isInt: {
        errorMessage: "Số điện thoại chưa đúng định dạng.",
      },
      isLength: {
        options: { min: 10 },
        errorMessage: "Số điện thoai phải có 10 số.",
      },
    },
    address: {
      notEmpty: {
        errorMessage: "Địa chỉ không được để trống.",
      },
    },
    username: {
      notEmpty: {
        errorMessage: "Username không được để trống.",
      },
    },
    password: {
      optional: true,
      isLength: {
        options: { min: 8 },
        errorMessage: "Mật khẩu tối thiểu 8 ký tự.",
      },
    },
    confirm_password: {
      optional: true,
      custom: {
        options: (value, { req }) => {
          return req.body.password === value;
        },
        errorMessage: "Mật khẩu nhập lại không khớp với mật khẩu trước đó.",
      },
    },
  }),
  handlerError,
];
