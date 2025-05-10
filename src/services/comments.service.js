const { readDb, writeDb } = require("../../utils/file");

const RESOURCE = "comments";

const getAllComments = async () => {
  const comments = await readDb(RESOURCE);
  return comments;
};

const getCommentById = async (id) => {
  const comments = await readDb(RESOURCE);
  const comment = comments.find((i) => i.id === +id);
  return comment;
};

const createComment = async (data) => {
  const comments = await readDb(RESOURCE);
  const newComment = {
    id: (comments[comments.length - 1].id ?? 0) + 1,
    content: data.content,
    post_id: data.post_id,
  };
  comments.push(newComment);
  await writeDb(RESOURCE, comments);
  return newComment;
};

const updateComment = async (id, data) => {
  const comments = await readDb(RESOURCE);
  const index = comments.findIndex((i) => i.id === +id);
  const comment = comments[index];
  if (index === -1) return null;

  comment.content = data.content;
  await writeDb(RESOURCE, comments);
  return comment[index];
};

const deleteComment = async (id) => {
  const comments = await readDb(RESOURCE);
  const index = comments.findIndex((i) => i.id === +id);
  if (index === -1) return null;

  comments.splice(index, 1);
  await writeDb(RESOURCE, comments);
  return comments;
};

const getCommentByPostId = async (postId) => {
  const comments = await readDb(RESOURCE);
  return comments.filter((comment) => comment.post_id === +postId);
};

module.exports = {
  getAllComments,
  getCommentById,
  createComment,
  updateComment,
  deleteComment,
  getCommentByPostId,
};
