const { success } = require("../../utils/response");
const throwError = require("../../utils/throwError");
const postsService = require("@/services/posts.service");
const commentsService = require("@/services/comments.service");
const { contextsKey } = require("express-validator/lib/base");
const getAllPosts = async (req, res) => {
  const posts = await postsService.getAllPosts();
  success(res, 200, posts);
};

const getPostById = async (req, res) => {
  const post = await postsService.getPostById(req.params.id);
  if (!post) throwError(404, "Not found");
  success(res, 200, post);
};

const createPost = async (req, res) => {
  const newPost = await postsService.createPost(req.body);
  success(res, 200, newPost);
};

const updatePost = async (req, res) => {
  const post = await postsService.updatePost(req.params.id, req.body);
  if (!post) throwError(404, "Not found");
  success(res, 200, post);
};

const deletePost = async (req, res) => {
  const result = await postsService.deletePost(req.params.id);
  if (!result) throwError(404, "Not found");
  res.status(204).send();
};

const getPostComments = async (req, res) => {
  const post = await postsService.getPostById(req.params.id);
  if (!post) throwError(404, "Not found");
  const comments = await commentsService.getCommentByPostId(post.id);
  success(res, 200, comments);
};

const createPostComments = async (req, res) => {
  const post = await postsService.getPostById(req.params.id);
  if (!post) throwError(404, "Not found");
  const newComment = await commentsService.createComment({
    post_id: post.id,
    content: req.body.content,
  });
  success(res, 201, newComment);
};
module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
  getPostComments,
  createPostComments,
};
