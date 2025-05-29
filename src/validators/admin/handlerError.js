const { validationResult } = require("express-validator");

const handlerError = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }

  const formatted = errors
    .array({
      onlyFirstError: true,
    })
    .reduce((errors, error) => {
      errors[error.path] = error.msg;
      return errors;
    }, {});
  res.render(res.view, {
    errors: formatted,
    old: {
      ...req.body,
      id: req.params.id,
    },
  });
};

module.exports = handlerError;
