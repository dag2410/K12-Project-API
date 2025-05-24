exports.showLoginForm = async (req, res) => {
  res.render("admin/auth/login", {
    layout: "admin/layout/auth",
  });
};

exports.showRegisterForm = async (req, res) => {
  res.render("admin/auth/register", {
    layout: "admin/layout/auth",
  });
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
