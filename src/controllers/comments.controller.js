const commentsService = require("@/services/comments.service");
const { success } = require("../../utils/response");
const throwError = require("../../utils/throwError");

const getAllComments = async (req, res) => {
  const comments = await commentsService.getAllComments();
  success(res, 200, comments);
};

const getCommentById = async (req, res) => {
  const comment = await commentsService.getCommentById(req.params.id);
  if (!comment) throwError(404, "Not found");
  success(res, 200, comment);
};

const createComment = async (req, res) => {
  const newComment = await commentsService.createComment(req.body);
  success(res, 200, newComment);
};

const updateComment = async (req, res) => {
  const comment = await commentsService.updateComment(req.params.id, req.body);
  if (!comment) throwError(404, "Not found");
  success(res, 200, comment);
};

const deleteComment = async (req, res) => {
  const result = await commentsService.deleteComment(req.params.id);
  if (!result) throwError(404, "Not found");
  res.status(204).send();
};

module.exports = {
  getAllComments,
  getCommentById,
  createComment,
  updateComment,
  deleteComment,
};
