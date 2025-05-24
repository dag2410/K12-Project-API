exports.index = async (req, res) => {
  res.render("admin/accountSettings/index", {
    title: "Account Settings",
  });
};
