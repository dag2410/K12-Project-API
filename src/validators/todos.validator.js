const { checkSchema } = require("express-validator");
const handlerError = require("./handlerErrors");

exports.createTodoValidator = [
  checkSchema({
    title: {
      notEmpty: true,
      errorMessage: "Title không được để trống",
    },
  }),
  handlerError,
];

exports.updateTodoValidator = [
  checkSchema({
    title: {
      optional: true,
      notEmpty: true,
      errorMessage: "Title không được để trống",
    },
    completed: {
      optional: true,
      isBoolean: true,
      errorMessage: "Completed phải là true hoặc false",
    },
  }),
  handlerError,
];
