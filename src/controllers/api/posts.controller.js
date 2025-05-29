const postsService = require("@/services/posts.service");
const { success } = require("../../utils/response");

exports.getList = async (req, res) => {
  const posts = await postsService.getAll();
  success(res, 200, posts);
};

exports.getOne = async (req, res) => {
  success(res, 200, req.post);
};

exports.create = async (req, res) => {
  const post = await postsService.create(req.body);
  success(res, 201, post);
};

exports.update = async (req, res) => {
  const post = await postsService.update(req.post.id, req.body);
  success(res, 200, post);
};

exports.remove = async (req, res) => {
  await postsService.remove(req.post.id);
  success(res, 200);
};

//commentsPost
exports.getComments = async (req, res) => {
  console.log(req.post.id);
  const comments = await postsService.getComments(req.post.id);
  const posts = await postsService.getById(req.post.id);
  const result = {
    ...posts,
    comments,
  };
  success(res, 200, result);
};

exports.createPostComment = async (req, res) => {
  console.log(req);
  const newComment = await postsService.createPostComment(
    req.post.id,
    req.body
  );
  success(res, 201, newComment);
};
