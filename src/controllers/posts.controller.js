const { readDb, writeDb } = require("../../utils/file");
const RESOURCE = "posts";

const getAllPosts = async (req, res) => {
  const posts = await readDb(RESOURCE);
  res.json({
    status: "success",
    data: posts,
  });
};

const getPostById = async (req, res) => {
  const posts = await readDb(RESOURCE);
  const post = posts.find((item) => item.id === +req.params.id);

  if (!post) {
    res.status(404).json({
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

const createPost = async (req, res) => {
  const posts = await readDb(RESOURCE);
  const newPost = {
    id: (posts[posts.length - 1].id ?? 0) + 1,
    content: req.body.content,
    title: req.body.title,
    description: req.body.description,
  };

  posts.push(newPost);
  await writeDb(RESOURCE, posts);

  res.status(201).json({
    status: "success",
    data: newPost,
  });
};

const updatePost = async (req, res) => {
  const posts = await readDb(RESOURCE);
  const post = posts.find((post) => post.id === +req.params.id);

  if (!post) {
    res.status(404).json({
      status: "error",
      message: "Resource not found",
    });
    return;
  }
  console.log(post);
  post.title = req.body.title;
  post.content = req.body.content;
  post.description = req.body.description;
  await writeDb(RESOURCE, posts);

  res.json({
    status: "success",
    data: post,
  });
};

const deletePost = async (req, res) => {
  const posts = await readDb(RESOURCE);
  const index = posts.findIndex((post) => post.id === +req.params.id);

  if (index === -1) {
    res.status(404).json({
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
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
