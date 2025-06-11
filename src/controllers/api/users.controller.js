const usersService = require("@/services/users.service");
const { success } = require("../../utils/response");
const transporter = require("@/configs/mail");
exports.getList = async (req, res) => {
  const message = {
    from: process.env.MAIL_SENDER_FROM, // sender address
    to: "dagger241004abc@gmail.com", // list of receivers
    subject: "Hello", // Subject line
    text: "Plaintext version of the message", // plain text body
    html: "<b style='color:red;'>Hello world?</b> <img src='https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/482784zzu/anh-mo-ta.png' alt='Girl in a jacket' width='500' height='600'>",
  };
  const info = await transporter.sendMail(message);
  console.log(info);

  const users = await usersService.getAll();
  success(res, 200, users);
};

exports.getOne = async (req, res) => {
  success(res, 200, req.user);
};

exports.create = async (req, res) => {
  const user = await usersService.create(req.body);
  success(res, 201, user);
};

exports.update = async (req, res) => {
  const user = await usersService.update(req.user.id, req.body);
  success(res, 200, user);
};

exports.remove = async (req, res) => {
  await usersService.remove(req.user.id);
  success(res, 200);
};
