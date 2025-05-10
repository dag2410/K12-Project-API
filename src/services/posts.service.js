// Service layer
const { readDb, writeDb } = require("../../utils/file");

const RESOURCE = "posts";

const getAllPosts = async () => {
  const posts = await readDb(RESOURCE);
  return posts;
};

const getPostById = async (id) => {
  const posts = await readDb(RESOURCE);
  const post = posts.find((i) => i.id === +id);
  return post;
};

const createPost = async (data) => {
  const posts = await readDb(RESOURCE);
  const newPost = {
    id: (posts[posts.length - 1]?.id ?? 0) + 1,
    content: data.content,
    title: data.title,
    description: data.description,
  };
  posts.push(newPost);
  await writeDb(RESOURCE, posts);
  return newPost;
};

const updatePost = async (id, data) => {
  const posts = await readDb(RESOURCE);
  const index = posts.findIndex((i) => i.id === +id);
  const post = posts[index];
  if (index === -1) return null;

  post.title = data.title;
  post.content = data.content;
  post.description = data.description;
  await writeDb(RESOURCE, posts);
  return post[index];
};

const deletePost = async (id) => {
  const posts = await readDb(RESOURCE);
  const index = posts.findIndex((post) => post.id === +id);
  if (index === -1) return;

  posts.splice(index, 1);
  await writeDb(RESOURCE, posts);
  return posts;
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
