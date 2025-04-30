const { checkSchema } = require("express-validator");
const handlerError = require("./handleErrors");

exports.createPostValidator = [
  checkSchema({
    title: {
      notEmpty: true,
      errorMessage: "Trường này không được để trống",
    },
    content: {
      notEmpty: true,
      errorMessage: "Trường này không được để trống",
    },
  }),
  handlerError,
];

exports.updatePostValidator = [
  checkSchema({
    title: {
      optional: true,
      notEmpty: true,
      errorMessage: "Trường này không được để trống",
    },

    content: {
      optional: true,
      notEmpty: true,
      errorMessage: "Trường này không được để trống",
    },
  }),
  handlerError,
];
