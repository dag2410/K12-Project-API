const commentsService = require("@/services/comments.service");

exports.index = async (req, res) => {
  const comments = await commentsService.getAll();
  res.render("admin/comments/", {
    title: "Comments List",
    comments,
  });
};

exports.show = async (req, res) => {
  const comment = await commentsService.getById(req.params.id);
  res.render("admin/comments/show", {
    comment,
  });
};

exports.edit = async (req, res) => {
  res.render("admin/comments/edit", {
    title: "Edit comment",
  });
};

exports.update = async (req, res) => {
  const comment = await commentsService.update(req.params.id, req.body);
  res.redirect(`admin/comments/${comment.id}`);
};
