const usersService = require("@/services/users.service");

exports.index = async (req, res) => {
  const users = await usersService.getAll();
  // console.log(await res.session.get("age"));
  // console.log(await res.session.get("name"));
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
  res.redirect(`/admin/users`);
};

exports.destroy = async (req, res) => {
  await usersService.remove(req.params.id);
  res.redirect("/admin/users");
};
