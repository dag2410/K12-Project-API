const { checkSchema } = require("express-validator");
const handlerError = require("./handlerErrors");

exports.createProductValidator = [
  checkSchema({
    name: {
      notEmpty: true,
      errorMessage: "Trường này không được để trống",
    },
    description: {
      notEmpty: true,
      errorMessage: "Trường này không được để trống",
    },
    stock: {
      notEmpty: {
        errorMessage: "Stock không được để trống",
      },
      isInt: {
        options: { min: 0 },
        errorMessage: "Stock phải là số nguyên không âm",
      },
    },
  }),
  handlerError,
];

exports.updateProductValidator = [
  checkSchema({
    name: {
      optional: true,
      notEmpty: true,
      errorMessage: "Trường này không được để trống",
    },

    description: {
      optional: true,
      notEmpty: true,
      errorMessage: "Trường này không được để trống",
    },
    stock: {
      optional: true,
      isInt: {
        options: { min: 0 },
        errorMessage: "Stock phải là số không âm",
      },
    },
  }),
  handlerError,
];
