const db = require("@/configs/db");
const { buildInsertQuery, buildUpdateQuery } = require("@/utils/queryBuilder");
const commentsModel = require("@/models/comments.model");

exports.findAll = async () => {
  const [posts] = await db.query(`select * from posts order by id desc`);
  return posts;
};

exports.findById = async (id) => {
  const [posts] = await db.query(
    `select * from posts WHERE id = ? OR slug = ?`,
    [id, id]
  );
  return posts[0];
};

exports.create = async (data) => {
  const { columns, placeholders, values } = buildInsertQuery(data);
  const query = `INSERT INTO posts (${columns}) VALUES (${placeholders})`;
  const [{ insertId }] = await db.query(query, values);

  return {
    id: insertId,
    ...data,
  };
};

exports.update = async (id, data) => {
  const { setClause, values } = buildUpdateQuery(data);
  values.push(id);
  const query = `UPDATE posts SET ${setClause} WHERE id = ?`;
  await db.query(query, values);
  return {
    id,
    ...data,
  };
};

exports.remove = async (id) => {
  const query = `delete from posts WHERE id = ?`;
  await db.query(query, [id]);
  return { id };
};

exports.count = async () => {
  const [{ rows }] = await db.query("select count(*) as total from posts");
  return rows;
};

exports.findComments = async (postId) => {
  const [comments] = await db.query(
    `SELECT * from comments where post_id = ?`,
    [postId]
  );
  return comments;
};

exports.createPostComment = async (postId, data) => {
  return await commentsModel.create({
    post_id: postId,
    ...data,
  });
};
