const postsService = require("@/services/posts.service");

exports.index = async (req, res) => {
  const posts = await postsService.getAll();
  res.render("admin/posts/index", {
    title: "Posts List",
    posts,
  });
};

exports.show = async (req, res) => {
  const post = await postsService.getById(req.params.id);
  console.log(post);
  res.render("admin/posts/show", {
    post,
  });
};

exports.create = async (req, res) => {
  res.render("admin/posts/create", {
    title: "Create Post",
    old: {},
    errors: {},
  });
};

exports.store = async (req, res) => {
  const post = await postsService.create(req.body);
  res.redirect(`admin/posts`);
};

exports.edit = async (req, res) => {
  res.render("admin/posts/edit", {
    title: "Edit post",
  });
};

exports.update = async (req, res) => {
  const post = await postsService.update(req.params.id, req.body);
  res.redirect(`admin/posts/${post.id}`);
};
