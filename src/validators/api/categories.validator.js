const { checkSchema } = require("express-validator");
const handlerError = require("./handlerErrors");

exports.createCategoryValidator = [
  checkSchema({
    name: {
      notEmpty: true,
      errorMessage: "Trường này không được để trống",
    },
    description: {
      notEmpty: true,
      errorMessage: "Trường này không được để trống",
    },
  }),

  handlerError,
];

exports.updateCategoryValidator = [
  checkSchema({
    name: {
      notEmpty: true,
      errorMessage: "Trường này không được để trống",
    },
    description: {
      notEmpty: true,
      errorMessage: "Trường này không được để trống",
    },
  }),

  handlerError,
];
