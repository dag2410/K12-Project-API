const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: process.env.MAIL_SERVICE,
  auth: {
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
  },
});

module.exports = transporter;


