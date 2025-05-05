const { readDb, writeDb } = require("../../utils/file");
const RESOURCE = "comments";

const getAllComments = async (req, res) => {
  const comments = await readDb(RESOURCE);
  res.json({
    status: "success",
    data: comments,
  });
};

const getCommentById = async (req, res) => {
  const comments = await readDb(RESOURCE);
  const comment = comments.find((item) => item.id === +req.params.id);

  if (!comment) {
    res.json({
      status: "error",
      message: "Resource not found",
    });

    return;
  }
  res.json({
    status: "success",
    data: comment,
  });
};

const createComment = async (req, res) => {
  const comments = await readDb(RESOURCE);
  const newComment = {
    id: (comments[comments.length - 1].id ?? 0) + 1,
    content: req.body.content,
    post_id: 1,
  };

  comments.push(newComment);
  await writeDb(RESOURCE, comments);

  res.json({
    status: "success",
    data: newComment,
  });
};

const updateComment = async (req, res) => {
  const comments = await readDb(RESOURCE);
  const comment = comments.find((comment) => comment.id === +req.params.id);

  if (!comment) {
    res.json({
      status: "error",
      message: "Resource not found",
    });
    return;
  }
  console.log(comment);
  comment.content = req.body.content;

  await writeDb(RESOURCE, comments);

  res.json({
    status: "success",
    data: comment,
  });
};

const deleteComment = async (req, res) => {
  const comments = await readDb(RESOURCE);
  const index = comments.findIndex((comment) => comment.id === +req.params.id);

  if (index === -1) {
    res.json({
      status: "error",
      message: "Resource not found",
    });

    return;
  }
  comments.splice(index, 1);
  await writeDb(RESOURCE, comments);

  res.status(204).send();
};

module.exports = {
  getAllComments,
  getCommentById,
  createComment,
  updateComment,
  deleteComment,
};
