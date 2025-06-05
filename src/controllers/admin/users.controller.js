const usersService = require("@/services/users.service");

exports.index = async (req, res) => {
  const users = await usersService.getAll();
  res.render("admin/users/", {
    title: "users List",
    users,
  });
};

exports.show = async (req, res) => {
  const user = await usersService.getById(req.params.id);
  res.render("admin/users/show", {
    user,
  });
};

exports.create = async (req, res) => {
  res.render("admin/users/create", {
    title: "Create user",
    old: {},
    errors: {},
  });
};

exports.store = async (req, res) => {
  const { confirm_password, ...body } = req.body;
  await usersService.create(body);
  res.flash({ type: "success", message: "Tạo người dùng thành công." });
  res.flash({ type: "success", message: "Tạo người dùng oke." });
  res.flash({ type: "info", message: "Người dùng đã được lưu vào hệ thống." });
  res.redirect(`/admin/users`);
};

exports.edit = async (req, res) => {
  const user = await usersService.getById(req.params.id);
  res.render("admin/users/edit", {
    user,
    old: user,
    errors: {},
  });
};

exports.update = async (req, res) => {
  const { confirm_password, ...body } = req.body;
  await usersService.update(req.params.id, body);
  res.flash({
    type: "success",
    message: "Sửa thông tin người dùng thành công.",
  });
  res.redirect(`/admin/users`);
};
exports.destroy = async (req, res) => {
  const deleted = await usersService.remove(+req.params.id);

  if (deleted) {
    res.flash({ type: "success", message: "Xóa người dùng thành công" });
    res.flash({
      type: "warning",
      message: "Người dùng đã được xóa khỏi hệ thống.",
    });
  } else {
    res.flash({
      type: "error",
      message: "Không tìm thấy người dùng để xoá",
    });
  }

  res.redirect("/admin/users");
};
