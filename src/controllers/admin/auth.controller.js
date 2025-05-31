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
    req.session.set("userId", user.id);
    return res.redirect("/admin");
  }
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
