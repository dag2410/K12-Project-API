const { checkSchema } = require("express-validator");
const handlerError = require("./handlerErrors");

exports.createCommentValidator = [
  checkSchema({
    content: {
      notEmpty: true,
      errorMessage: "Trường này không được để trống",
    },
  }),
  handlerError,
];

exports.updateCommentValidator = [
  checkSchema({
    content: {
      optional: true,
      notEmpty: true,
      errorMessage: "Trường này không được để trống",
    },
  }),
  handlerError,
];
