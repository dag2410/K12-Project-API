const commentsService = require("@/services/comments.service");
const { success } = require("../../utils/response");

const getList = async (req, res) => {
  const comments = await commentsService.getAll();
  success(res, 200, comments);
};

const getOne = async (req, res) => {
  success(res, 200, req.comment);
};

const create = async (req, res) => {
  const comment = await commentsService.create(req.body);
  success(res, 201, comment);
};

const update = async (req, res) => {
  const comment = await commentsService.update(req.comment.id, req.body);
  success(res, 200, comment);
};

const remove = async (req, res) => {
  await commentsService.remove(req.comment.id);
  success(res, 200);
};

module.exports = {
  getList,
  getOne,
  create,
  update,
  remove,
};
