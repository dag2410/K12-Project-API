const { checkSchema } = require("express-validator");
const handlerError = require("./handlerErrors");

exports.createRoomValidator = [
  checkSchema({
    title: {
      notEmpty: true,
      errorMessage: "Trường này không được để trống",
    },
    price: {
      notEmpty: true,
      errorMessage: "Trường này không được để trống",
    },
    location: {
      notEmpty: true,
      errorMessage: "Trường này không được để trống",
    },
    bedrooms: {
      notEmpty: {
        errorMessage: "Trường này được để trống",
      },
      isInt: {
        options: { min: 0 },
        errorMessage: "Bedrooms phải là số nguyên không âm",
      },
    },
    amenities: {
      notEmpty: true,
      errorMessage: "Trường này không được để trống",
    },
  }),
  handlerError,
];

exports.updateRoomValidator = [
  checkSchema({
    title: {
      optional: true,
      notEmpty: true,
      errorMessage: "Trường này không được để trống",
    },

    price: {
      optional: true,
      notEmpty: true,
      errorMessage: "Trường này không được để trống",
    },
    location: {
      optional: true,
      notEmpty: true,
      errorMessage: "Trường này không được để trống",
    },
    bedrooms: {
      optional: true,
      isInt: {
        options: { min: 0 },
        errorMessage: "Trường này phải là số không âm",
      },
    },
    amenities: {
      notEmpty: true,
      errorMessage: "Trường này không được để trống",
    },
  }),
  handlerError,
];
