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
  console.log(user);
  res.render("admin/users/show", {
    user,
  });
};

exports.create = async (req, res) => {
  res.render("admin/users/create", {
    title: "Create user",
  });
};

exports.store = async (req, res) => {
  const user = await usersService.create(req.body);
  res.redirect(`admin/users/${user.id}`);
};

exports.edit = async (req, res) => {
  res.render("admin/users/edit", {
    title: "Edit user",
  });
};

exports.update = async (req, res) => {
  const user = await usersService.update(req.params.id, req.body);
  res.redirect(`/admin/users/${user.id}`);
};
