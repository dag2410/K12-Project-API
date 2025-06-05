const usersService = require("@/services/users.service");

exports.showRegisterForm = async (req, res) => {
  res.render("admin/auth/register", {
    layout: "admin/layout/auth",
    old: {},
    errors: {},
  });
};

exports.register = async (req, res) => {
  await usersService.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  res.flash({
    type: "success",
    message: "Đăng kí thành công",
  });
  res.redirect("/admin/auth/login");
};

exports.showLoginForm = async (req, res) => {
  res.render("admin/auth/login", {
    layout: "admin/layout/auth",
    old: {},
    errors: {},
  });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await usersService.getByEmailAndPassword(email, password);

  if (user) {
    req.session.userId = user.id;
    res.flash({
      type: "success",
      message: "Đăng nhập thành công",
    });
    return res.redirect("/admin");
  }
};

exports.logout = async (req, res) => {
  delete req.session.userId;
  return res.redirect("/admin/auth/login");
};

exports.showForgotForm = async (req, res) => {
  res.render("admin/auth/forgotPassword", {
    layout: "admin/layout/auth",
  });
};

exports.showResetForm = async (req, res) => {
  res.render("admin/auth/resetPassword", {
    layout: "admin/layout/auth",
  });
};
