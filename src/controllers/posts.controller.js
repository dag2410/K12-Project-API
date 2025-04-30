const { readDb, writeDb } = require("../../utils/file");
const RESOURCE = "posts";

const posts = [];

const index = async (req, res) => {
  const posts = await readDb(RESOURCE);
  res.json({
    status: "success",
    data: posts,
  });
};

const show = async (req, res) => {
  const posts = await readDb(RESOURCE);
  const post = posts.find((item) => item.id === +req.params.id);

  if (!post) {
    res.json({
      status: "error",
      message: "Resource not found",
    });

    return;
  }
  res.json({
    status: "success",
    data: post,
  });
};

const store = async (req, res) => {
  const posts = await readDb(RESOURCE);
  const newPost = {
    id: (posts[posts.length - 1].id ?? 0) + 1,
    content: req.body.content,
    title: req.body.title,
  };

  posts.push(newPost);
  await writeDb(RESOURCE, posts);

  res.json({
    status: "success",
    data: newPost,
  });
};

const update = async (req, res) => {
  const posts = await readDb(RESOURCE);
  const post = posts.find((post) => post.id === +req.params.id);

  if (!post) {
    res.json({
      status: "error",
      message: "Resource not found",
    });
    return;
  }
  console.log(post);
  post.title = req.body.title;
  post.content = req.body.content;

  await writeDb(RESOURCE, posts);

  res.json({
    status: "success",
    data: post,
  });
};

const destroy = async (req, res) => {
  const posts = await readDb(RESOURCE);
  const index = posts.findIndex((post) => post.id === +req.params.id);

  if (index === -1) {
    res.json({
      status: "error",
      message: "Resource not found",
    });

    return;
  }
  posts.splice(index, 1);
  await writeDb(RESOURCE, posts);

  res.status(204).send();
};

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
