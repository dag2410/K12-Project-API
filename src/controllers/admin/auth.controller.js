const transporter = require("@/configs/mail");
const usersService = require("@/services/users.service");
const { verifyToken, createToken } = require("@/utils/jwt");

exports.showRegisterForm = async (req, res) => {
  res.render("admin/auth/register", {
    layout: "admin/layout/auth",
    old: {},
    errors: {},
  });
};

exports.register = async (req, res) => {
  const user = await usersService.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  const token = createToken(
    {
      userId: user.id,
    },
    {
      expiresIn: 60 * 60 * 12,
    }
  );

  const verifyUrl = `${req.protocol}://${req.host}/admin/auth/verify-email?token=${token}`;
  transporter.sendMail({
    from: "dangdhf8198@fullstack.edu.vn",
    to: user.email,
    html: ` <div>
                <p>
                    Nhấn vào đây để xác thực:
                </p>
                <p>
                    <a href="${verifyUrl}">Xác minh tài khoản</a>
                </p>
            </div>`,
  });

  res.flash({
    type: "success",
    message: `Chúng tôi đã gửi một email xác thực tới ${user.email}. Hãy kiểm tra inbox và xác minh để tiếp tục.`,
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

exports.verifyEmail = async (req, res) => {
  const token = req.query.token;
  const verify = verifyToken(token);
  if (verify.success) {
    const userId = verify.data.userId;
    const user = await usersService.getById(userId);
    if (user.verified_at) {
      res.flash({
        type: "info",
        message: "Liên kết xác minh đã hết hạn hoặc không hợp lệ",
      });
      return res.redirect("/admin/login");
    }
    await usersService.update(userId, {
      verified_at: new Date(),
    });
    res.send("Verify success");
    return;
  }
  res.send("Verify fail");
};
